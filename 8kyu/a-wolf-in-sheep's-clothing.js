// ❓ Description:

// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
//
//     Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
//
//     [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
// 7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
//
// Note: there will always be exactly one wolf in the array.

// ✔️ SOLUTION:

function warnTheSheep(queue) {
    wolf_position = -1;

    for(let i = 0; i < queue.length; i++) {
        if (queue[i] == 'wolf') {
            wolf_position = i;
            break;
        }
    }

    if (wolf_position === queue.length -1) {
        return "Pls go away and stop eating my sheep";
    } else {
        let sheep_position = queue.length - wolf_position -1;
        return `Oi! Sheep number ${sheep_position}! You are about to be eaten by a wolf!`;
    }
}
