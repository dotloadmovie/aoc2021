import * as fs from 'fs'

const raw = fs.readFileSync('./data/puzzle1.txt')
const data:string[] = raw.toString().split('\n');

console.log('ready')
