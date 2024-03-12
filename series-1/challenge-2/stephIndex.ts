
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("\nFOR EACH");
const reduceForEach = <T>(arr: T[], doFn: (each: T) => void) => {
    arr.reduce((_, curr) => {
        doFn(curr)
        return undefined;
    }, undefined);
}

const forEachFn = <T>(x: T) => console.log(x);

reduceForEach(arr, forEachFn);


console.log("\nMAP");

const reduceMap = <T_in, T_out>(arr: T_in[], doFn: (each: T_in) => T_out): T_out[] => {
    return arr.reduce((prev, curr) => {
        prev.push(doFn(curr))
        return prev;
    }, [] as T_out[]);
}

// stephg - uses substantially more time and space when using the spread operator instead of `.push()`, but it looks nice
// const reduceMap = <T_in, T_out>(arr: T_in[], doFn: (each: T_in) => T_out): T_out[] => {
//     return arr.reduce((prev, curr) => [...prev, doFn(curr)], [] as T_out[]);
// }

const mapFn = (x: number) => x * 2;
console.log(reduceMap(arr, mapFn));

const mapFnToString = (x: number) => `${x}`;
console.log(reduceMap(arr, mapFnToString));


console.log("\nFILTER");
const reduceFilter = <T>(arr: T[], predicate: (val: T) => boolean) => {
    return arr.reduce((prev, curr) => {
        if (predicate(curr)) prev.push(curr);
        return prev;
    }, [] as T[]);
}

const filterFn = (x: number) => x % 2 === 0;

console.log(reduceFilter(arr, filterFn));
