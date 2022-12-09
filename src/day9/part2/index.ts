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
const tails: Point[] = Array(10).fill({}).map((i) => { return {x: 0, y: 0}})

const visitedPositions = ["00"]

const updatePositions = (head:Point, tail:Point):void => {
    // Is tail still close enough?
    // If on the same row
    if(head.y === tail.y) {
        if(head.x - tail.x > 0) {
            if( head.x - tail.x >= 2) {
                tail.x += 1
            }
            
        } else if (head.x - tail.x < 0) {
            if(tail.x - head.x >= 2) {
                tail.x -= 1
            }
        }
        
    } else if(head.x === tail.x) { // If on the same col
        if(head.y - tail.y > 0) {
            if( head.y - tail.y >= 2) {
                tail.y += 1
            }
        } else if (head.y - tail.y < 0) {
            if(tail.y - head.y >= 2) {
                tail.y -= 1
            }
        }
    } else {
        // Not touching
        if(head.y > tail.y) {
            if(head.y - tail.y >= 2) {
                if(head.x > tail.x) {
                    tail.x += 1
                    tail.y +=1
                } else {
                    tail.x -= 1;
                    tail.y += 1
                }
            } else if (head.x - tail.x >= 2) {
                tail.x += 1
                tail.y +=1
            } else if (tail.x - head.x >= 2) {
                tail.x -= 1;
                tail.y += 1
            }
        } else if (head.y < tail.y) {
            if(tail.y - head.y >= 2) {
                
                if(head.x > tail.x) {
                    tail.x += 1
                    tail.y -=1
                } else {
                    tail.x -= 1;
                    tail.y -= 1
                }
            } else if (head.x - tail.x >= 2) {
                    tail.x += 1
                    tail.y -=1
            } else if (tail.x - head.x >= 2) {
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
        let curHead = head;
        for (let t = 0; t < tails.length; t++) {
            if(t > 0) {
                curHead = tails[t - 1];
            }
            updatePositions(curHead, tails[t])
            if(t === 8) {
                if(!visitedPositions.includes(`${tails[t].x}${tails[t].y}`)){
                    visitedPositions.push(`${tails[t].x}${tails[t].y}`)
                }
            }
        }
        
    }
}
console.log(head)
console.log(visitedPositions)
console.log("Number of visited positions:", visitedPositions.length)