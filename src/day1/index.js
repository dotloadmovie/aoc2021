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
var calcValues = function (last, curr, input, acc) {
    if (input[curr] > input[last]) {
        acc.push(depths.increased);
    }
    if (input[curr + 1]) {
        calcValues(curr, curr + 1, input, acc);
    }
};
calcValues(0, 1, data, output);
console.log(output.length);
