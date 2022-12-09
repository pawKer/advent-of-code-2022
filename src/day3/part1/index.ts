import { stringInputToArray } from "../../utils/utils";
import { input, testInput } from "../input";
const inputData = stringInputToArray(input)
console.log(inputData)
let priorityScore = 0;
for(const itemList of inputData) {
    console.log(itemList)
    const firstHalf = itemList.substring(0, itemList.length / 2)
    const secondHalf = itemList.substring(itemList.length / 2)
    let letterInCommon;
    for(const letter of firstHalf) {
        if (secondHalf.includes(letter)) {
            letterInCommon = letter;
        }
    }
    if(letterInCommon) {
        let valueToAdd;
        if(letterInCommon.toUpperCase() === letterInCommon) {
            valueToAdd = letterInCommon.charCodeAt(0) - 38
        } else {
            valueToAdd = letterInCommon.charCodeAt(0) - 96
        }
        priorityScore += valueToAdd 
        console.log(letterInCommon, valueToAdd)
        
    }
}

console.log("Answer: ", priorityScore)