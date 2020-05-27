/*
  nombre: Clases y herencia
  autor: Fabián Flores Vadell
  version: 0.0.1
*/

/*********************************
 * Definición de la clase Persona
 *********************************/

class Persona {

  constructor(dni, nombre, edad, ciudad, estados) {
    this._dni = dni
    this._nombre = nombre
    this._edad = edad
    this._ciudad = ciudad
    this._estados = estados
  }

  set dni(dni) { this._dni = dni }
  set nombre(nombre) { this._nombre = nombre }
  set edad(edad) { this._edad = edad }
  set ciudad(ciudad) { this._ciudad = ciudad }

  get dni() { return this._dni }
  get nombre() { return this._nombre }
  get edad() { return this._edad }
  get ciudad() { return this._ciudad }
    
  toString() { return `Hola, soy ${this.nombre} con DNI: ${this.dni}, tengo ${this.edad} años y vivo en ${this.ciudad}` }

  que_esta_haciendo(estados) {
    const indice = Math.round(Math.random() * (this._estados.length - 1))
    return this._estados[indice]
  }
}

class DNI {
  constructor(nro_dni) {
    this._nro_dni = nro_dni
  }

  get letra() {
    const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']  
    const mod_num = 23
    const indice = this._nro_dni % mod_num
    return letras[indice]
  }

  toString() { return this._nro_dni + this.letra }

}

// testear Persona

estados = [
  "cantantado.",
  "silvando.",
  "tarareando"
]
const persona = new Persona(new DNI(4556777), "Joan Manuel", 74, "Barcelona", estados)

function hablar_con(una_persona) {
  console.log("-".repeat(80))
  console.log()
  console.log(`¿Quién eres?: ${una_persona}`)
  console.log(`¿${una_persona.nombre} qué estás haciendo?: ${una_persona.que_esta_haciendo()}`)
  console.log()
}

hablar_con(persona)

/**********************************
 * Definición de la clase Empleado
 **********************************/

class Empleado extends (Persona) {
  
  constructor(dni, nombre, edad, ciudad, puesto, antiguedad, salario, estados) { 
    
    super(dni, nombre, edad, ciudad)

    this._puesto = puesto
    this._antiguedad = antiguedad
    this._salario = salario

    this._estados = estados
  }

  set puesto(puesto) { this._puesto = puesto }
  set antiguedad(antiguedad) { this._antiguedad = antiguedad }
  set salario(salario) { this._salario = salario }

  get puesto() { return this._puesto }
  get antiguedad() { return this._antiguedad }
  get salario() { return this._salario }

  toString() {
    return super.toString() +
      `, trabajo de: ${this.puesto} desde hace ${this.antiguedad} años y gano ${this.salario} al año`
  }
}

// testear Empleado

estados = [
  "¡Hostia! ¡No otra vez!",
  "¡Me c..o en mi p..a madre!",
  "¡Shhh, silencio que viene el jefe!"
]
const empleado = new Empleado(new DNI(5956347), "Manolo", 28, "Dublin", "Desarrollador Web", 10, 35000, estados)

hablar_con(empleado)

/******************************
 * Definición de la clase Jefe
 ******************************/

class Jefe extends (Empleado) {
  constructor(dni, nombre, edad, ciudad, puesto, antiguedad, salario, estados) {
    super(dni, nombre, edad, ciudad, puesto, antiguedad, salario, estados)
  }

  despedir(empleado) {
    return `${empleado.nombre}, lamentablemente te tengo que informar que estás despedido.`
  }

  contratar(persona) { 
    return `${persona.nombre}, ¿cuándo puedes empezar?`
  }
}

// testear Jefe

estados = [
  "¡Pero y esto qué es!",
  "¡¿Cuántas veces quieres que te lo explique?!",
  "¡No vuelvas a llegar tarde!",
  "¿Quién metió estos blobs aquí?"
]

const jefe = new Jefe(new DNI(4568728), "Linus", 52, "Palo Alto", "Master of the universe", 30, 250000, estados)

hablar_con(jefe)

console.log()
console.log(jefe.despedir(empleado))
console.log(jefe.contratar(persona))

