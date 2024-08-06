// ❓ Description:

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
//     Return the resulting string.

// ✔️ SOLUTION:
function fakeBin(x) {
    // Split the string into an array of characters, map each digit to '0' or '1', then join the array back into a string
    return x.split('').map(digit => digit < '5' ? '0' : '1').join('');
}
