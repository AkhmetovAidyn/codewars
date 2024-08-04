// ❓ Description:
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

// ✔️ SOLUTION:

function findAverage(arr) {
    if (arr.length === 0) {
        return 0;
    }
    const sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}

