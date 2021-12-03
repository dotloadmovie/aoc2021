"use strict";
exports.__esModule = true;
var fs = require("fs");
var raw = fs.readFileSync('./data/puzzle1.txt');
var data = raw.toString().split('\n').map(function (row) {
    return row.split('');
});
//const oxygen = [];
//const co2 = [];
var getDominantValue = function (arr, pos) {
    var zeroes = [];
    var ones = [];
    arr.forEach(function (row) {
        if (row[pos] === '0') {
            zeroes.push(row);
        }
        else {
            ones.push(row);
        }
    });
    if (ones.length >= arr.length / 2) {
        return ones;
    }
    else {
        return zeroes;
    }
};
var getRecessiveValue = function (arr, pos) {
    var zeroes = [];
    var ones = [];
    arr.forEach(function (row) {
        if (row[pos] === '0') {
            zeroes.push(row);
        }
        else {
            ones.push(row);
        }
    });
    if (zeroes.length <= arr.length / 2) {
        return zeroes;
    }
    else {
        return ones;
    }
};
var runner = function (arr, value, count) {
    var output = [];
    if (value === 'OXYGEN') {
        output = getDominantValue(arr, count);
    }
    else {
        output = getRecessiveValue(arr, count);
    }
    if (output.length > 1) {
        return runner(output, value, count + 1);
    }
    else {
        return output;
    }
};
var oxygen = runner(data, 'OXYGEN', 0);
var co2 = runner(data, 'CO2', 0);
console.log(parseInt(oxygen[0].join(''), 2) * parseInt(co2[0].join(''), 2));
