// ❓ Description:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). [Завершите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (также строкой).]
//
// Examples:
//
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// ✔️ SOLUTION:

function solution(str, ending){
    return str.endsWith(ending);
}

console.log(solution("str", 's'))