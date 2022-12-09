import { stringInputToArray } from "../../utils/utils";
import { input, testInput } from "../input";
const inputData = stringInputToArray(input)

const rules: {
    [key: string]: string
} = {
    "A": "Y", // Rock loses to paper
    "B": "Z", // Paper loses to scissors
    "C": "X", // Scissors loses to rock
}

const translations: {
    [key: string]: string
} = {
    "A": "X",
    "B": "Y",
    "C": "Z"
}

const points: {
    [key: string]: number
} = {
    "X": 1,
    "Y": 2,
    "Z": 3
}

let score = 0;
for(let round of inputData) {
    const moves = round.split(" ")
    const opMove = moves[0]
    const myMove = moves[1]
    console.log(opMove, myMove)
    score += points[myMove]
    if (translations[opMove] === myMove) {
        console.log("Draw")
        score += 3
    } else if (myMove === rules[opMove]) {
        console.log("I won")
        // I won
        score += 6
    } else {
        console.log("Opponent won")
        // Opponent won
        score += 0
    }
}

console.log("Answer: ", score)