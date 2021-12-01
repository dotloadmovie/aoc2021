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

const calcValues = (curr:number, input:number[], acc:any[]) => {
    const window1 = input[curr] + input[curr + 1] + input[curr + 2]
    const window2 = input[curr + 1] + input[curr + 2] + input[curr + 3]

    if(window2 > window1) {
        acc.push(depths.increased)
    }
    if(input[curr + 4]) {
        calcValues(curr + 1, input, acc)
    }
}

calcValues(0, data, output)
console.log(output.length)