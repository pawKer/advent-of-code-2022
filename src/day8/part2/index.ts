import { print2DArray, readAs2DArray, stringInputToArray } from "../../utils/utils";
import { input, testInput } from "../input";

const inputData = stringInputToArray(input);

const matrix = readAs2DArray(inputData)
print2DArray(matrix)

const treesOnEdges = 2 * matrix[0].length +  2 * (matrix.length - 2)
console.log("Trees on edges:", treesOnEdges)

let maxScenicScore = 0;
for(let i = 1; i < matrix.length - 1; i++) {
    for(let j = 1; j < matrix[i].length - 1; j++) {
        let scenicScore = 1;
        let visibleTreeCount = 0;
        console.log("Checking ", matrix[i][j])
        // Check top
        for (let m = i - 1; m >= 0; m--) {
            if(matrix[i][j] <= matrix[m][j]) {
                visibleTreeCount++
                break;
            } else {
                visibleTreeCount++;
            }
        }
        scenicScore *= visibleTreeCount
        visibleTreeCount = 0;
        // Check bottom
        for (let m = i + 1; m < matrix.length; m++) {
            if(matrix[i][j] <= matrix[m][j]) {
                visibleTreeCount++
                break;
            } else {
                visibleTreeCount++;
            }
        }

        scenicScore *= visibleTreeCount
        visibleTreeCount = 0;

        // Check left
        for (let m = j - 1; m >= 0; m--) {
            if(matrix[i][j] <= matrix[i][m]) {
                visibleTreeCount++
                break;
            } else {
                visibleTreeCount++;
            }
        }

        scenicScore *= visibleTreeCount
        visibleTreeCount = 0;

        // Check right
        for (let m = j + 1; m < matrix[i].length; m++) {
            if(matrix[i][j] <= matrix[i][m]) {
                visibleTreeCount++
                break;
            } else {
                visibleTreeCount++;
            }
        }

        scenicScore *= visibleTreeCount

        console.log("\t Scenic score: ", scenicScore)
        if(scenicScore > maxScenicScore) {
            maxScenicScore = scenicScore;
        }
    }
    
}
console.log("Max scenic score: ", maxScenicScore)