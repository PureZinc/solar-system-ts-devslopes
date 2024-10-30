// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy
import { Asteroid } from "../data/types";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]): number | undefined {
    const yearCount = new Map<number, number>();

    for (const asteroid of asteroids) {
        const year = asteroid.discoveryYear;
        yearCount.set(year, (yearCount.get(year) || 0) + 1);
    }

    let maxYear: number | undefined = undefined;
    let maxCount = 0

    for (const [year, count] of yearCount.entries()) {
        if (count > maxCount) {
            maxYear = year;
            maxCount = count;
        }
    }
    return maxYear;
}   

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
