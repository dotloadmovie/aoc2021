import * as fs from 'fs'

type Movements = {
    distance: number,
    depth: number
}

enum Instructions {
    FORWARD = 'forward',
    DOWN = 'down',
    UP = 'up'
}

const raw = fs.readFileSync('./data/puzzle1.txt')
const data:string[] = raw.toString().split('\n');

const movements:Movements = {
    distance: 0,
    depth: 0
}

data.forEach((instruction:string):void => {
    const [direction, distance] = instruction.split(' ');

    if(direction === Instructions.FORWARD) {
        movements.distance += parseInt(distance.trim())
    }

    if(direction === Instructions.DOWN) {
        movements.depth += parseInt(distance.trim())
    }

    if(direction === Instructions.UP) {
        movements.depth -= parseInt(distance.trim())
    }
})

console.log(movements.distance * movements.depth)