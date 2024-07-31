// ❓ Description:

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// ✔️ SOLUTION:

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}


console.log(removeExclamationMarks("Hello! World!"));
console.log(removeExclamationMarks("No exclamation marks here."));
console.log(removeExclamationMarks("!!!"));
