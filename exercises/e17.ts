export const minBy = <T>(array: T[], cb: (element: T) => string | number): T | undefined => {
    if (!array[0]) return undefined;  // Handle empty array case

    let minElement: T = array[0];

    for (let item of array) {
        if (cb(item) < cb(minElement)) {
            minElement = item;
        }
    }

    return minElement;
};

export function maxBy<T>(array: T[], cb: (element: T) => string | number): T | undefined {
    if (!array[0]) return undefined;  // Handle empty array case

    let maxElement: T = array[0];

    for (let item of array) {
        if (cb(item) > cb(maxElement)) {
            maxElement = item;
        }
    }

    return maxElement;
}

// The funny thing is that this solution STILL throws me type errors in e17.test.js, and I've tried EVERYTHING to fix it!
// I'll just leave it be for now until I get an explanation!