import { stringInputToArray } from "../../utils/utils";
import { input, testInput } from "../input";

const inputData = stringInputToArray(input);

let currentCycle = 0;
let registerX = 1;
let impSteps = 20;
let sum = 0;
const cyclesForAdd = 2
let CRToutput = "";

for(let row of inputData) {
    if(row.startsWith("noop")) {
        currentCycle++
        if((currentCycle - 1) % 40 === registerX || (currentCycle - 1) % 40 === registerX + 1 || (currentCycle - 1) % 40 === registerX - 1) {
            CRToutput += '#'
            console.log(`Cycle ${currentCycle}, adding pixel: #, ${registerX}`)
        } else {
            CRToutput += '.';
            console.log(`Cycle ${currentCycle}, adding pixel: ., ${registerX}`)
        }
        if(currentCycle % 40 === 0) {
            CRToutput += '\n'
        }
    } else if (row.startsWith("add")) {
        const tokens = row.split(" ");
        for(let i = 0; i < cyclesForAdd; i++) {
            currentCycle++;
            if((currentCycle - 1) % 40 === registerX || (currentCycle - 1) % 40 === registerX + 1 || (currentCycle - 1) % 40 === registerX - 1) {
                CRToutput += '#'
                console.log(`Cycle ${currentCycle}, adding pixel: #, ${registerX}`)
            } else {
                CRToutput += '.';
                console.log(`Cycle ${currentCycle}, adding pixel: ., ${registerX}`)
            }
            if(currentCycle % 40 === 0) {
                CRToutput += '\n'
            }

        }
        registerX += parseInt(tokens[1])
    }

}
console.log(CRToutput)