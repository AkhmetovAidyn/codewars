// ❓ Description:

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
//
//     Examples
//     [7, 1]  =>  [1, 7]
//     [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]

// ✔️ SOLUTION:

function sortArray(array) {
    const oddNumbers = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);

    let oddIndex = 0;
    return array.map(num => {
        if (num % 2 !== 0) {
            return oddNumbers[oddIndex++];
        } else {
            return num;
        }
    });
}