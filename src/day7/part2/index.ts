import { stringInputToArray } from "../../utils/utils";
import { input, testInput, testInput2 } from "../input";

const inputData = stringInputToArray(testInput);

interface File {
    name: string,
    size: number
}

interface Directory {
    name: string,
    directories: Directory[];
    files: File[];
    prevDir: Directory | null;
}


let currentDir: Directory = {
    name: "/",
    directories: [],
    files: [],
    prevDir: null
};
for (let line of inputData) {
    if(line.startsWith('$')) {
        const tokens = line.split(" ")
        if(tokens[1] === "ls") {
            continue;
        }
        if(tokens[1] === "cd") {
            if(tokens[2] === "..") {
                console.log("Going up one")
                if(currentDir.prevDir) {
                    currentDir = currentDir.prevDir;
                } else {
                    console.log("Couldn't go up!!!!!!!")
                }
            } else if (tokens[2] === "/") {
                console.log("Going to root")
                while(currentDir.prevDir) {
                    currentDir = currentDir.prevDir;
                }
            } else {
                console.log("Going in one")
                const newDir = currentDir.directories.find((dir) => dir.name === tokens[2])
                if(newDir) {
                    currentDir = newDir
                } else {
                    console.log("DIR NOT FOUND!!!!!")
                }
            }
            console.log("Current dir is: ", currentDir.name)
        }
    } else if (line.startsWith("dir")) {
        const tokens = line.split(" ")
        if(!currentDir.directories.find((dir) => dir.name === tokens[1])) {
            console.log(`Adding new dir ${tokens[1]} to dir ${currentDir.name}`)
            currentDir.directories.push({
                name: tokens[1],
                directories: [],
                files: [],
                prevDir: currentDir
            })
        }
    } else {
        const tokens = line.split(" ")
        if(!currentDir.files.find((file) => file.name === tokens[1])) {
            console.log(`Adding file  ${tokens[1]} to dir`, currentDir.name)
            currentDir.files.push({
                name: tokens[1],
                size: parseFloat(tokens[0])
            })
        }
    }
}

// Go back to root dir
while(currentDir.prevDir) {
    currentDir = currentDir.prevDir;
}

var cache: any = [];
console.log(JSON.stringify(currentDir, (key, value) => {
  if (typeof value === 'object' && value !== null) {
    // Duplicate reference found, discard key
    if (cache.includes(value)) return;

    // Store value in our collection
    cache.push(value);
  }
  return value;
}));
cache = null; // Enable garbage collection


const dirSizes:number[] = []


const calculateDirSize = (dir: Directory): number => {
    if(dir.files.length === 0 && dir.directories.length === 0) {
        return 0
    }
    const sumOfFileSizes = dir.files.reduce((partialSum, a) => partialSum + a.size, 0)
    let sumOfDirSizes = 0;
    for(let innerDir of dir.directories) {
        sumOfDirSizes += calculateDirSize(innerDir)
    }
    dirSizes.push(sumOfDirSizes + sumOfFileSizes) ;
    return sumOfDirSizes + sumOfFileSizes;
}


calculateDirSize(currentDir)
let finalSum = 0
for(const size of dirSizes) {
    finalSum += size;
    
}
console.log("Current free space: ", 70000000 - dirSizes.sort((a, b) => a-b)[dirSizes.length - 1])
const spaceNeeded = 30000000 - (70000000 - dirSizes.sort((a, b) => a-b)[dirSizes.length - 1])
console.log("Need more space:", spaceNeeded)

dirSizes.sort()
console.log(dirSizes.sort((a, b) => a-b).find((num) => num >= spaceNeeded))
