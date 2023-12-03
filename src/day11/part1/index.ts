import { listenerCount } from "process";
import { stringInputToArray } from "../../utils/utils";
import { input, testInput } from "../input";

const inputData = stringInputToArray(input);

type Monkey = {
    items: number[],
    operation: {
        type: string,
        factor1: string;
        factor2: string;
    },
    test: {
        check: number;
        pass: number;
        fail: number;
    };
    itemsInspected: number;
}

let currentMonkey = -1;
const monkeys: Monkey[] = []
for(const row of inputData) {
    if(row.startsWith("Monkey")) {
        currentMonkey++;
        monkeys[currentMonkey] = {
            items: [],
            operation: {
                type: "",
                factor1: "",
                factor2: ""
            },
            test: {
                check: 0,
                pass: 0,
                fail: 0
            },
            itemsInspected: 0
        }
    }
    if(row.startsWith("Starting")) {
        const tokens = row.split(":");
        const numbers =  tokens[1].split(',')
        monkeys[currentMonkey].items.push(...numbers.map((n) => parseInt(n)))
    } else if (row.startsWith("Operation")) {
        const tokens = row.split(":")
        const operation = tokens[1].split("=")
        const opTokens = operation[1].trim().split(' ')
        monkeys[currentMonkey].operation.type = opTokens[1]
        monkeys[currentMonkey].operation.factor1 = opTokens[0]
        monkeys[currentMonkey].operation.factor2 = opTokens[2]
    } else if (row.startsWith("Test")) {
        const tokens = row.split(':');
        const terms = tokens[1].trim().split(' ')
        monkeys[currentMonkey].test.check = parseInt(terms[2]);
    } else if (row.includes("If true")) {
        const tokens = row.split(':');
        const terms = tokens[1].trim().split(' ')
        monkeys[currentMonkey].test.pass = parseInt(terms[3])
    } else if (row.includes("If false")) {
        const tokens = row.split(':');
        const terms = tokens[1].trim().split(' ')
        monkeys[currentMonkey].test.fail = parseInt(terms[3])
    }
}
console.log(monkeys)
for(let i = 0; i < 20; i++) {
    for(const monkey of monkeys) {
        for(const item of monkey.items) {
            let itemValue: number = 0;
            let factor1: number = 0;
            let factor2: number = 0;
            console.log(monkey.operation.factor1)
            if(monkey.operation.factor1 === "old") {
                factor1 = item;
            } else {
                factor1 = parseInt(monkey.operation.factor1)
            }

            if(monkey.operation.factor2 === "old") {
                factor2 = item;
            } else {
                factor2 = parseInt(monkey.operation.factor2)
            }

            if(monkey.operation.type === "*") {
                itemValue = factor1 * factor2;
                
            } else if (monkey.operation.type === "+") {
                itemValue = factor1 + factor2;
            }
            console.log(factor1, factor2)
            console.log(itemValue)
            itemValue = Math.floor(itemValue / 3);
            if(itemValue % monkey.test.check === 0) {
                console.log("Pushing value", itemValue, " to monkey ", monkey.test.fail)
                monkeys[monkey.test.pass].items.push(itemValue)
            } else {
                
                console.log("Pushing value", itemValue, " to monkey ", monkey.test.fail)
                monkeys[monkey.test.fail].items.push(itemValue)
            }
            monkey.itemsInspected ++;
        }
        monkey.items = []
    }
}
const sortedMonkeys = monkeys.map(m => m.itemsInspected).sort((a, b) => a-b)

const product = sortedMonkeys[sortedMonkeys.length - 1] * sortedMonkeys[sortedMonkeys.length - 2];
console.log(product)