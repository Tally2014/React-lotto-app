/* Gets random interger: [1..6]. */

function randomBall(max){
    return Math.floor(Math.random() * max) + 1;
}


/* Get n rolls => [num, ...]. */

function getRolls(n,max){
    return Array.from({length: n}, () => randomBall(max));
}

export {randomBall, getRolls};