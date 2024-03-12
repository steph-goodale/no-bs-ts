import { reduceFilter } from "./solutionFunctions/filter";
import { reduceForEach } from "./solutionFunctions/forEach";
import { reduceMap } from "./solutionFunctions/map";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


console.log("\nFOR EACH");
reduceForEach(arr, (x) => console.log(x));


console.log("\nMAP");
// test mapping to same output type as input type
console.log(reduceMap(arr, (x) => x * 2));

// test mapping to different output type than input type
console.log(reduceMap(arr, (x) => `${x}`));


console.log("\nFILTER");
console.log(reduceFilter(arr, (x) => x % 2 === 0));
