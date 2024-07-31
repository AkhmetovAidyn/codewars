// ❓ Description:

// Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.
//
// Note: This includes any characters
//
// Examples
// 'abbbbc'  => 'abc'    #  answer: 3
// 'abbcca'  => 'abca'   #  answer: 2
// 'ab cca'  => 'ab ca'  #  answer: 1

// ✔️ SOLUTION:
function countRepeats(str) {
    let count = 0;
    let prevChar = str[0];

    for (let i = 1; i < str.length; i++) {
        if (str[i] === prevChar) {
            count++;
        } else {
            prevChar = str[i];
        }
    }

    return count;
}


const result1 = countRepeats('abbbbc');
console.log(result1); // Должно вернуть 3

const result2 = countRepeats('abbcca');
console.log(result2); // Должно вернуть 2

const result3 = countRepeats('ab cca');
console.log(result3); // Должно вернуть 1
