import { print2DArray, readAs2DArray, stringInputToArray } from "../../utils/utils";
import { input, testInput } from "../input";

const inputData = stringInputToArray(input);

const matrix = readAs2DArray(inputData)
print2DArray(matrix)

const treesOnEdges = 2 * matrix[0].length +  2 * (matrix.length - 2)
console.log("Trees on edges:", treesOnEdges)

let visibleCount = 0
for(let i = 1; i < matrix.length - 1; i++) {
    for(let j = 1; j < matrix[i].length - 1; j++) {
        let visible = 4;
        console.log("Checking ", matrix[i][j])
        // Check top
        for (let m = i - 1; m >= 0; m--) {
            if(matrix[i][j] <= matrix[m][j]) {
                visible--;
                // console.log("\tNot visible top")
                break;
            }
        }

        // Check bottom
        for (let m = i + 1; m < matrix.length; m++) {
            if(matrix[i][j] <= matrix[m][j]) {
                visible--;
                // console.log("\tNot visible bototm")
                break;
            }
        }

        // Check left
        for (let m = j - 1; m >= 0; m--) {
            if(matrix[i][j] <= matrix[i][m]) {
                visible--;
                // console.log("\tNot visible left")
                break;
            }
        }

        // Check right
        for (let m = j + 1; m < matrix[i].length; m++) {
            if(matrix[i][j] <= matrix[i][m]) {
                visible--;
                // console.log("\tNot visible right")
                break;
            }
        }

        if(visible > 0) {
            visibleCount ++;
        }
    }
    
}
console.log(visibleCount)
console.log("Total visible: ", treesOnEdges + visibleCount)