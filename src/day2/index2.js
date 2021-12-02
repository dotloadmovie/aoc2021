"use strict";
exports.__esModule = true;
var fs = require("fs");
var Instructions;
(function (Instructions) {
    Instructions["FORWARD"] = "forward";
    Instructions["DOWN"] = "down";
    Instructions["UP"] = "up";
})(Instructions || (Instructions = {}));
var raw = fs.readFileSync('./data/puzzle1.txt');
var data = raw.toString().split('\n');
var movements = {
    distance: 0,
    depth: 0,
    aim: 0
};
data.forEach(function (instruction) {
    var _a = instruction.split(' '), direction = _a[0], distance = _a[1];
    if (direction === Instructions.FORWARD) {
        movements.distance += parseInt(distance.trim());
        movements.depth += movements.aim * parseInt(distance.trim());
    }
    if (direction === Instructions.DOWN) {
        movements.aim += parseInt(distance.trim());
    }
    if (direction === Instructions.UP) {
        movements.aim -= parseInt(distance.trim());
    }
});
console.log(movements.distance * movements.depth);
