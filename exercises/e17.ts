export const minBy = <T>(array: T[], cb: (element: T | undefined) => number): T | undefined => {
    if (array.length === 0) return undefined;  // Handle empty array case

    let minElement = array[0];
    let minValue = cb(minElement);

    for (let i = 1; i < array.length; i++) {
        const currentValue = cb(array[i]);
        if (currentValue < minValue) {
            minValue = currentValue;
            minElement = array[i];
        }
    }

    return minElement;
};

export function maxBy<T>(array: T[], cb: (element: T | undefined) => boolean): T | undefined {
    if (array.length === 0) return undefined;  // Handle empty array case

    let maxElement = array[0];
    let maxValue = cb(maxElement);

    for (let i = 1; i < array.length; i++) {
        const currentValue = cb(array[i]);
        if (currentValue > maxValue) {
            maxValue = currentValue;
            maxElement = array[i];
        }
    }

    return maxElement;
}

// The funny thing is that this solution STILL throws me type errors in e17.test.js, and I've tried EVERYTHING to fix it!
// I'll just leave it be for now until I get an explanation!