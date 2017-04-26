'use strict';
let util = require('util');
 
 /**
 * Clase para representar una Shape.
 */
class Shape {
 /**
 * Método Constructor de una Shape.
 *
 * @param {object} options Bloque de código.
 * @param {width} options.width Anchura de la figura.
 * @param {height} options.height Altura de la figura.
 */     
  constructor(options, shape){
    Object.assign(this, options);
    this.shape =  shape || this.constructor.name;
  }
  
/**
 * Método para consegur el area..
 *
 * @return {int} Valor del tamaño del area.
 */ 
  getArea() {
   try {
      let shape = this;
      if (this.constructor.name === 'Shape') 
        shape = new Shape.Shapes[this.shape](this);
      return shape.area();
   }
   catch(e) {
     console.error(`Can't compute area of '${this.shape}' shape.`);
     return null;
   }
  }
  
  /**
 * Método para Saber que tipo de figuar soy
 *
 * @return {string} Retorna como se llama el tipo de figura.
 */ 
  gettipo(){
     this.constructor.name;
  }
  
}

  /**
 * Método que es accedido pro todas las figuras da igual el tipo para
 * cada vez que se crea una figura se incorporara a este array.
 */ 
Shape.Shapes = Shape.Shapes || {};
module.exports = Shape;

