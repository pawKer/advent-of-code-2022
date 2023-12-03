import { stringInputToArray } from "../../utils/utils";
import { input, testInput } from "../input";

const inputData = stringInputToArray(input);

let currentCycle = 0;
let registerX = 1;
let impSteps = 20;
let sum = 0;
const cyclesForAdd = 2
for(let row of inputData) {
    if(row.startsWith("noop")) {
        currentCycle++
    } else if (row.startsWith("add")) {
        const tokens = row.split(" ");
        for(let i = 0; i < cyclesForAdd; i++) {
            currentCycle++;
            if(currentCycle === impSteps) {
                console.log("Reached imp step: ", registerX)
                sum += registerX * impSteps;
                impSteps += 40;
            }

        }
        registerX += parseInt(tokens[1])
    }
    if(currentCycle === impSteps) {
        console.log("Reached imp step: ", registerX)
        sum += registerX * impSteps;
        impSteps += 40;
    }

}
console.log("Singal strength sum: ", sum)