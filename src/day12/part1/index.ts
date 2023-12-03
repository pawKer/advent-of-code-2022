import { listenerCount } from "process";
import { readAs2DArray, stringInputToArray } from "../../utils/utils";
import { input, testInput } from "../input";

const inputData = stringInputToArray(testInput);
const board = readAs2DArray(inputData)

let startPos: number[] = []
let endPos: number[] = []
for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
        if(board[i][j] === 'S') {
            startPos = [i, j]
        } else if(board[i][j] === 'E') {
            endPos = [i, j]
        }
    }
}

const calculateHeight = (input: string) => {
    return input.charCodeAt(0) - 96;
}

console.log(startPos, endPos)
let currentHeight = 0
let i = startPos[0]
let j = startPos[1]
while (endPos[0] !== i && endPos[1] !== j) {
    currentHeight = calculateHeight(board[i][j])
    let neighbours: {value: string, pos: number[], height: number}[] = []
    if(i > 0) {
        // Top neighbor
        neighbours.push({value: board[i - 1][j], pos: [i - 1, j], height: calculateHeight(board[i - 1][j])})
    }
    if(i + 1 < board.length) {
        // Bottom neighbor
        neighbours.push({value: board[i + 1][j], pos: [i + 1, j], height: calculateHeight(board[i + 1][j])})
    }
    if(j > 0) {
        // Left neighbor
        neighbours.push({value: board[i][j - 1], pos: [i, j - 1], height: calculateHeight(board[i][j - 1])})
    }
    if(j + 1 < board.length) {
        // Right neighbor
        neighbours.push({value: board[i][j - 1], pos: [i, j + 1], height: calculateHeight(board[i - 1][j + 1])})
    }
    const prefferedN = neighbours.filter((n) => n.height === currentHeight + 1);
    console.log("Preffered: ", prefferedN)
    if(prefferedN.length === 1) {
        i = prefferedN[0].pos[0]
        j = prefferedN[0].pos[1]
        continue;
    } else if (prefferedN.length > 1) {
        // Choose the one in the right direction
    }
    const viableN = neighbours.filter(n => n.height <= currentHeight + 1)
    const sorted = viableN.sort((a, b) => a.height - b.height)
    console.log(sorted)
    for(const n of viableN) {

    }

}
