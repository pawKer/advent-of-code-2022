import { stringInputToArray } from "../../utils/utils";
import { input, testInput } from "../input";
const inputData = stringInputToArray(input)

let count = 0;
let index = 0;
const stacks: string[][] = []
const instructions = []
for(const row of inputData) {
    if(row.includes("]")) {
        console.log(`Row: ${index}`)
        for(let i = 0; i < row.length; i += 4) {
            if(row[i + 1] !== " "){
                console.log(`Stack ${i / 4 + 1}`, row[i+1])
                if(!stacks[i / 4 + 1]) {
                    stacks[i/4+1] = [row[i+1]]
                } else {
                    stacks[i/4+1].unshift(row[i+1])
                }
            }
        }
    }
    if(row.includes("move")) {
        instructions.push(row)
    }
    index++;
    
}
const numberPattern = /\d+/g;
for(const inst of instructions) {
    console.log(inst)
    const [howMany, startSt, endSt] = inst.match(numberPattern) || []
    if(howMany) {
        if(parseInt(howMany) === 1) {
            const elemToMove = stacks[parseInt(startSt)].pop()
            if(elemToMove)
                stacks[parseInt(endSt)].push(elemToMove)
        } else {
            let elemsToMove = []
            for(let i = 0; i < parseInt(howMany); i++) {
                const elem = stacks[parseInt(startSt)].pop()
                if(elem) {
                    elemsToMove.push(elem)
                }
                
            }
            console.log(elemsToMove)
            for(let i = elemsToMove.length - 1; i >= 0; i--) {
                stacks[parseInt(endSt)].push(elemsToMove[i])
            }
        }
    }
} 
    

let ans = ""
for(let i = 1; i < stacks.length; i++) {
    ans += stacks[i].pop()
}
console.log("Answer: ", ans)