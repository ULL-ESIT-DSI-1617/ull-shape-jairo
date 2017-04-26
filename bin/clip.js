#!/usr/bin/env node
"use strict";

let util = require('util');
let Shape = require('@alu0100813272/ull-shape-jairo');
var readline = require('readline');

try {
  let arg = process.argv[2] || '{"width":9, "height":5}';
  let obj = JSON.parse(arg);
  
  let type = process.argv[3] || 'Triangle';
  
  
  let Triangle = require('@alu0100813272/ull-shape-'+ type.toLowerCase() + '-jairo');
  let t = new  Shape.Shapes[type](obj);
 // console.log(type);
  let s = t.getArea();
  console.log("Soy " + t.gettipo() + " y mi area es de " + s);

}
catch (e) {
  console.log(e.message);
}

