import { stringInputToArray } from "../../utils/utils";
import { input, testInput } from "../input";
const inputData = stringInputToArray(input)

let count = 0;
for(const row of inputData) {
    const pair = row.split(',')
    const firstInterval = pair[0].split('-')
    const a1 = parseInt(firstInterval[0])
    const b1 = parseInt(firstInterval[1])
    const secondInterval = pair[1].split('-')
    const a2 = parseInt(secondInterval[0])
    const b2 = parseInt(secondInterval[1])

    if(a2 >= a1 && b2 <= b1 || a1 >= a2 && b2 >= b1) {
        count++
    }
}
console.log("Answer: ", count)