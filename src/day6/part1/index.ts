import { input, testInput } from "../input";
const inputData = input;

for(let i = 0; i < inputData.length - 4; i++) {
    const fourCharSeq = inputData.slice(i, i + 4)
    const letterOccurences: {
        [key: string]: number
    } = {}
    for (const letter of fourCharSeq) {
        if(letterOccurences[letter]) {
            letterOccurences[letter]++;
        } else {
            letterOccurences[letter] = 1;
        }
    }
    console.log(fourCharSeq)
    if (Object.values(letterOccurences).every((val) => val === 1)) {
        console.log(`Found unique sequence after ${i + 4} chars`)
        break;
    }
}