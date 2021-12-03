import * as fs from 'fs'

const raw = fs.readFileSync('./data/puzzle1.txt')
const data:string[] = raw.toString().split('\n');

const rotateArray = (arr:any):any => {
    //assumes all arrays are the same length
    const output = {}

    arr.forEach((row) => {
        row.split('').forEach((digit, i) => {
            if(!output[i]) {
                output[i] = []
            }

            output[i].push(digit)
        })
    })

    return Object.values(output)
}

const counts = rotateArray(data)
const gamma = [];
const epsilon = [];

counts.forEach((countRow) => {
    const ones = countRow.filter((item) => {
        return item === '1'
    }).length

    if(ones >= countRow.length/2) {
        gamma.push('1')
        epsilon.push('0')
    } else {
        gamma.push('0')
        epsilon.push('1')
    }
})

console.log(parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2))
