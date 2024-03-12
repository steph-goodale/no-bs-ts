export const reduceForEach = <T>(arr: T[], doFn: (each: T) => void) => {
    arr.reduce((_, curr) => {
        doFn(curr)
        return undefined;
    }, undefined);
}
