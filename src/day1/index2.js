"use strict";
exports.__esModule = true;
var fs = require("fs");
var depths;
(function (depths) {
    depths["increased"] = "increased";
    depths["decreased"] = "decreased";
})(depths || (depths = {}));
var raw = fs.readFileSync('./data/puzzle1.txt');
var data = raw.toString().split('\n').map(function (str) {
    return parseInt(str);
});
var output = [];
var calcValues = function (curr, input, acc) {
    var window1 = input[curr] + input[curr + 1] + input[curr + 2];
    var window2 = input[curr + 1] + input[curr + 2] + input[curr + 3];
    if (window2 > window1) {
        acc.push(depths.increased);
    }
    if (input[curr + 4]) {
        calcValues(curr + 1, input, acc);
    }
};
calcValues(0, data, output);
console.log(output.length);
