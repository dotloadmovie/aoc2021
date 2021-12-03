import * as fs from 'fs'

const raw = fs.readFileSync('./data/puzzle1.txt')
const data = raw.toString().split('\n').map((row) => {
    return row.split('')
});

const getDominantValue = (arr, pos) => {
    const zeroes = [];
    const ones = [];

    arr.forEach((row) => {
        if(row[pos] === '0') {
            zeroes.push(row);
        } else {
            ones.push(row)
        }
    })


    if(ones.length >= arr.length/2) {
        return ones;
    } else {
        return zeroes;
    }
}

const getRecessiveValue = (arr, pos) => {
    const zeroes = [];
    const ones = [];

    arr.forEach((row) => {
        if(row[pos] === '0') {
            zeroes.push(row);
        } else {
            ones.push(row)
        }
    })

    if(zeroes.length <= arr.length/2) {
        return zeroes;
    } else {
        return ones;
    }
}

const runner = (arr, value, count) => {
    let output = [];

    if(value === 'OXYGEN') {
        output = getDominantValue(arr, count)
    } else {
        output = getRecessiveValue(arr, count)
    }

    if(output.length > 1) {
        return runner(output, value, count + 1)
    } else {
        return output;
    }

    
} 

const oxygen = runner(data, 'OXYGEN', 0)
const co2 = runner(data, 'CO2', 0)

console.log(parseInt(oxygen[0].join(''), 2) * parseInt(co2[0].join(''), 2))