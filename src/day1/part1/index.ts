import { stringInputToArray } from "../../utils/utils";
import { input } from "../input";
const inputData = stringInputToArray(input)

let maxElfCalories = 0;
let currentElfCalories = 0;
for (const foodItem of inputData) {
    if(!foodItem) {
        if(currentElfCalories > maxElfCalories) {
            maxElfCalories = currentElfCalories
        }
        currentElfCalories = 0;
        continue;
    }
    currentElfCalories += parseInt(foodItem)
}
if(currentElfCalories > 0 && currentElfCalories > maxElfCalories) {
    maxElfCalories = currentElfCalories
}
console.log("Answer: ", maxElfCalories)