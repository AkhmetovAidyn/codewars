// ❓ Description:

// You get an array of numbers, return the sum of all of the positives ones.
//
//     Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

// ✔️ SOLUTION:

function positiveSum(arr) {
    return arr.reduce((sum, current) => {
        if(current > 0) {
            return sum + current;
        }
        return sum;
    }, 0)
}
