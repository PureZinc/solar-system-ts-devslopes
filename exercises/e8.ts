// SPACE DATA EXERCISE 8
// Return a Planet by a given moon name
//  must have destructured parameters
import { Planet } from "../data/types";

type FuncType = {
    planets: Planet[],
    moonName: string
}
export function findPlanetByMoon({ planets, moonName }: FuncType) {
    moonName = moonName.charAt(0).toUpperCase() + moonName.slice(1).toLowerCase();
    return planets.find(planet => planet.moons?.includes(moonName));
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
