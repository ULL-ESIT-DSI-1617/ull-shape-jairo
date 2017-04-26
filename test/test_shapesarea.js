"use strict"

let Shape = require('../lib/shapesarea.js')
let should = require('should');

describe("Shape", function() {

   it("Inicializacion", function() {
        should.exist(new Shape({width:15, height:15},'Shape'));
   })
  

});
      