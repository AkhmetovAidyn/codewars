// ❓ Description:

// Task
// Create a function that always returns True/true for every item in a given list.
//     However, if an element is the word 'flick', switch to always returning the opposite boolean value.


// ✔️ SOLUTION:

function flickSwitch(arr){
    let res = [];
    let state = true;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 'flick') {
            state = !state;
        }
        res.push(state)
    }
    return res
}
