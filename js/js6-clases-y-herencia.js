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