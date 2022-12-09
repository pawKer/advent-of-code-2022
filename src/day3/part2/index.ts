import { stringInputToArray } from "../../utils/utils";
import { input, testInput } from "../input";
const inputData = stringInputToArray(input)
let priorityScore = 0;

let ELFS_IN_GROUP = 3
let itemsInCurrGroup = 0;
for(let i = 0; i < inputData.length; i += ELFS_IN_GROUP) {
    const letterMap: {
        [key: string]: number
    } = {}
    for(let j = i; j < i + ELFS_IN_GROUP; j++) {
        const alreadyIn: string[] = []
        for(const letter of inputData[j]) {
            if(!alreadyIn.includes(letter)) {
                alreadyIn.push(letter)
                if(letterMap[letter]) {
                    letterMap[letter]++
                } else {
                    letterMap[letter] = 1
                }
            }
            
        }
    }
    let letterInCommon;
    for( const [key, value] of Object.entries(letterMap)) {
        if(value === 3) {
            letterInCommon = key;
            break;
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
        
    }
    itemsInCurrGroup = 0
    
}

console.log("Answer: ", priorityScore)