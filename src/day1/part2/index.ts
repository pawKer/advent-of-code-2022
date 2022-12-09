import { stringInputToArray } from "../../utils/utils";
import { input, testInput } from "../input";
const inputData = stringInputToArray(input)
let elfs = []
let currentElfCalories = 0;
let currentElfIndex = 1;
for (const foodItem of inputData) {
    if(!foodItem) {
        elfs.push( {
            calories: currentElfCalories,
            index: currentElfIndex
        })
        currentElfCalories = 0;
        currentElfIndex++;
        continue;
    }
    currentElfCalories += parseInt(foodItem)
}
if(currentElfCalories > 0) {
    elfs.push( {
        calories: currentElfCalories,
        index: currentElfIndex
    })
}

const sortedElfs = elfs.sort((a,b) => b.calories - a.calories)
console.log("Answer: ", sortedElfs[0].calories + sortedElfs[1].calories + sortedElfs[2].calories)