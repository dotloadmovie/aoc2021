"use strict";
exports.__esModule = true;
var fs = require("fs");
var raw = fs.readFileSync('./data/puzzle1.txt');
var data = raw.toString().split('\n');
console.log('ready');
