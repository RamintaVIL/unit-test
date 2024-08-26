const distinctAverages = require('./task');

describe("task tests", () => {
    test('Basic test with distinct averages', () => {
        expect(distinctAverages([1, 2, 3, 4])).toBe(1)
    });
    test('Test with more distinct averages', () => {
        expect(distinctAverages([1, 3, 5, 7])).toBe(1);
        // Paaiškinimas: Vidurkiai yra (1+7)/2 = 4 ir (3+5)/2 = 4, taigi yra 1 unikalus vidurkis.
    });
    test('Test with no duplicates in averages', () => {
        expect(distinctAverages([1, 8, 3, 6])).toBe(1);
        // Paaiškinimas: Vidurkiai yra (1+8)/2 = 4.5 ir (3+6)/2 = 4.5, taigi yra 1 unikalus vidurkis.
    });
    test('Test with all elements the same', () => {
        expect(distinctAverages([4, 4, 4, 4])).toBe(1);
        // Paaiškinimas: Vidurkiai yra (4+4)/2 = 4, tik vienas unikalus vidurkis.
    });
});





