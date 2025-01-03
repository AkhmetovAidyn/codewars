// ❓ Description:
// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of
//
//     , the cube above will have volume of
//
// and so on until the top which will have a volume of
//
//     You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
//
//     The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as
//
//     =m if such a n exists or -1 if there is no such n.
//
//     Examples:
// findNb(1071225) --> 45
//
// findNb(91716553919377) --> -1

// ✔️ SOLUTION:

function findNb(m) {
    var n = 0
    while (m > 0) m -= ++n**3
    return m ? -1 : n
}