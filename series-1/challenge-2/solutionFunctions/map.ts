export const reduceMap = <T_in, T_out>(arr: T_in[], doFn: (each: T_in) => T_out): T_out[] => {
    return arr.reduce((prev, curr) => {
        prev.push(doFn(curr))
        return prev;
    }, [] as T_out[]);
};

// stephg - uses substantially more time and space when using the spread operator instead of `.push()`, but it looks nice
// const reduceMap = <T_in, T_out>(arr: T_in[], doFn: (each: T_in) => T_out): T_out[] => {
//     return arr.reduce((prev, curr) => [...prev, doFn(curr)], [] as T_out[]);
// };

