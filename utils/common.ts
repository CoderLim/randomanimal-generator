export function getRandomNumbersInRange(min: number, max: number, count: number): number[] {
    if (count > max - min + 1) {
        throw new Error("Range is too small for the number of unique random numbers requested.");
    }

    const numbers: Set<number> = new Set();

    while (numbers.size < count) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNum);
    }

    return Array.from(numbers);
}
