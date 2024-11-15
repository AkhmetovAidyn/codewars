// ❓ Description:

// Many programming languages provide the functionality of converting a string to uppercase or lowercase. For example, upcase/downcasein Ruby, upper/lowerin Python, and toUpperCase/toLowerCasein Java/JavaScript, uppercase/lowercasein Kotlin. Typically, these methods won't change the size of the string.
// For example, in Ruby, str.upcase.downcase.size == str.sizeis truefor most cases.
//     However, in some special cases, the length of the transformed string may be longer than the original. Can you find a string that satisfies this criteria?
//     For example, in Ruby, That means str.upcase.downcase.size > str.size
// You should just set the value of STRANGE_STRINGto meet the previous criteria.
//     Note: Meta programming is not allowed in this kata. So, the size of your solution is limited.

// ✔️ SOLUTION:

const STRANGE_STRING = "straße"