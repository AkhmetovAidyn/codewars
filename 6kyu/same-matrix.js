// ❓ Description:
// You have some 2*2 matrices, each matrix is represented by an array of length 4.
//
// such as [a, b, c, d] is matrix
//
// a b
// c d
// Matrix can be rotated:
//
//     a b   90 degrees  c a  180 degrees  d c  270 degrees  b d
// c d  -----------> d b  -----------> b a  -----------> a c
// If matrix A can be obtained by rotating matrix B clockwise by 0, 90, 180 or 270 degrees, we think that A and B are the same matrix.
//
//     For example, the following matrices are considered the same.
//
// 1 2
// 3 4
//
// 3 1
// 4 2
//
// 4 3
// 2 1
//
// 2 4
// 1 3
// The task of this kata is to count how many different matrices you have.
//
//     Samples
//
// // Same as the above example.
// count_different_matrices([[1, 2, 3, 4],
//     [3, 1, 4, 2],
//     [4, 3, 2, 1],
//     [2, 4, 1, 3]]);
//
// //should return '1'
// Notes
//
// All the matrices' elements are integers between 1 and 9, and the number of matrices will not exceed 1000.

// ✔️ SOLUTION:

function rotate90(matrix) {
    return [matrix[2], matrix[0], matrix[3], matrix[1]];
}

function getAllRotations(matrix) {
    let rotations = [matrix];
    let currentRotation = matrix;

    for (let i = 0; i < 3; i++) {
        currentRotation = rotate90(currentRotation);
        rotations.push(currentRotation);
    }

    return rotations;
}

function countDifferentMatrices(matrices) {
    let uniqueMatrices = new Set();

    matrices.forEach(matrix => {
        let rotations = getAllRotations(matrix);

        let minRotation = rotations.reduce((min, current) =>
            min < current.toString() ? min : current.toString(), rotations[0].toString());

        uniqueMatrices.add(minRotation);
    });

    return uniqueMatrices.size;
}

const matrices = [
    [1, 2, 3, 4],
    [3, 1, 4, 2],
    [4, 3, 2, 1],
    [2, 4, 1, 3]
];

const result = countDifferentMatrices(matrices);
console.log(result);