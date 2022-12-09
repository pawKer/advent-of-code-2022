import { stringInputToArray } from "../../utils/utils";
import { input, testInput } from "../input";

const inputData = stringInputToArray(input);
type Point = {
    x: number,
    y: number
}
const head: Point = {
    x: 0,
    y: 0
}
const tail: Point = {
    x: 0,
    y: 0,
}

const visitedPositions = ["00"]

const updatePositions = (head:Point, tail:Point):void => {
    // Is tail still close enough?
    // If on the same row
    if(head.y === tail.y) {
        console.log("Still on same row")
        if(head.x - tail.x > 0) {
            if( head.x - tail.x >= 2) {
                tail.x += 1
                console.log("\t Moving to right")
            }
            
        } else if (head.x - tail.x < 0) {
            if(tail.x - head.x >= 2) {
                tail.x -= 1
                console.log("\t Moving to left")
            }
        }
        
    } else if(head.x === tail.x) { // If on the same col
        console.log("Still on same col")
        if(head.y - tail.y > 0) {
            if( head.y - tail.y >= 2) {
                tail.y += 1
                console.log("\t Moving up")
            }
        } else if (head.y - tail.y < 0) {
            if(tail.y - head.y >= 2) {
                tail.y -= 1
                console.log("\t Moving down")
            }
        }
    } else {
        // Not touching
        
        if(head.y > tail.y) {
            if(head.y - tail.y >= 2) {
                console.log("Head is higher")
                if(head.x > tail.x) {
                    console.log("\t Moving diagonally up right")
                    tail.x += 1
                    tail.y +=1
                } else {
                    console.log("\t Moving diagonally up left")
                    tail.x -= 1;
                    tail.y += 1
                }
            } else if (head.x - tail.x >= 2) {
                console.log("\t Moving diagonally up right")
                tail.x += 1
                tail.y +=1
            } else if (tail.x - head.x >= 2) {
                console.log("\t Moving diagonally up left")
                tail.x -= 1;
                tail.y += 1
            }
        } else if (head.y < tail.y) {
            console.log("Head is higher")
            if(tail.y - head.y >= 2) {
                
                if(head.x > tail.x) {
                    console.log("\t Moving diagonally down right")
                    tail.x += 1
                    tail.y -=1
                } else {
                    console.log("\t Moving diagonally down left")
                    tail.x -= 1;
                    tail.y -= 1
                }
            } else if (head.x - tail.x >= 2) {
                console.log("\t Moving diagonally down right")
                    tail.x += 1
                    tail.y -=1
            } else if (tail.x - head.x >= 2) {
                console.log("\t Moving diagonally down left")
                    tail.x -= 1;
                    tail.y -= 1
            }
        }
    }
}

for(const row of inputData) {
    const tokens = row.split(" ")
    const moveValue = parseInt(tokens[1])

    for(let i = 0; i < moveValue; i++) {
        if (tokens[0] == "R") {
            head.x ++;
        } else if (tokens[0] == "L") {
            head.x --;
        } else if (tokens[0] == "U") {
            head.y ++;
        } else {
            head.y --;
        }
        updatePositions(head, tail)
        if(!visitedPositions.includes(`${tail.x}${tail.y}`)){
            visitedPositions.push(`${tail.x}${tail.y}`)
        }
        console.log(head, tail)
    }
}
console.log(head)
console.log(tail)
console.log("Number of visited positions:", visitedPositions.length)