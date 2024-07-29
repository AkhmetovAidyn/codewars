// ❓ Description:
// Description:
// Make a simple function called greet that returns the most-famous "hello world!".
//
// Style Points
// Sure, this is about as easy as it gets.
// But how clever can you be to create the most creative "hello world" you can think of?
// What is a "hello world" solution you would want to show your friends?
// hello world

// ✔️ SOLUTION:

function greet() {
    var msg =
        '###   ###  ########  ###       ###         #####         ###         ###    #####    #######    ###       ######      ###' +
        '###   ###  ###       ###       ###       ###   ###       ###         ###  ###   ###  ###   ##   ###       ###   ###   ###' +
        '#########  ########  ###       ###       ###   ###       ###   ###   ###  ###   ###  ######     ###       ###    ###  ###' +
        '###   ###  ###       ###       ###       ###   ###        #####   #####   ###   ###  ###  ###   ###       ###   ###      ' +
        '###   ###  ########  ########  ########    #####           ###     ###      #####    ###   ###  ########  ######      ###';

    return msg
        .match(new RegExp('.{' + (msg.length / 5) + '}', 'g'))
        .reduce(function(p, c, li) { c.split('').map(function(c, i) { p[li + i * 5] = c; }); return p; }, [])
        .join('')
        .match(/(.{5})+?(?: {10}|$)/g)
        .map(function(l) { return l.split('').reduce(function(p, c, i) { return p+((c=='#'?1:0)*[1,3,5,7,11][i%5])}, 0); })
        .map(function(n) { return {0: ' ', 60: '!', 136: 'l', 150: 'o', 160: 'r', 162: 'd', 166: 'e', 177: 'h', 205: 'w'}[n]; })
        .join('');
}
