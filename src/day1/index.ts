import * as fs from 'fs'

enum depths {
    increased = 'increased',
    decreased = 'decreased'
}


const raw = fs.readFileSync('./data/puzzle1.txt')
const data = raw.toString().split('\n').map((str:string):number => {
    return parseInt(str)
})

const output = []

const calcValues = (last:number, curr:number, input:number[], acc:any[]) => {
    if(input[curr] > input[last]) {
        acc.push(depths.increased)
    }
    if(input[curr + 1]) {
        calcValues(curr, curr + 1, input, acc)
    }
}

calcValues(0, 1, data, output)
console.log(output.length)