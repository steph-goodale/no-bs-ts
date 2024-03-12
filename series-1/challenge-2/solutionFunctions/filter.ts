export const reduceFilter = <T>(arr: T[], predicate: (val: T) => boolean) => {
    return arr.reduce((prev, curr) => {
        if (predicate(curr)) prev.push(curr);
        return prev;
    }, [] as T[]);
}
