"use strict";
exports.__esModule = true;
var fs = require("fs");
var raw = fs.readFileSync('./data/puzzle1.txt');
var data = raw.toString().split('\n');
var rotateArray = function (arr) {
    //assumes all arrays are the same length
    var output = {};
    arr.forEach(function (row) {
        row.split('').forEach(function (digit, i) {
            if (!output[i]) {
                output[i] = [];
            }
            output[i].push(digit);
        });
    });
    return Object.values(output);
};
var counts = rotateArray(data);
var gamma = [];
var epsilon = [];
counts.forEach(function (countRow) {
    var ones = countRow.filter(function (item) {
        return item === '1';
    }).length;
    if (ones >= countRow.length / 2) {
        gamma.push('1');
        epsilon.push('0');
    }
    else {
        gamma.push('0');
        epsilon.push('1');
    }
});
console.log(parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2));
