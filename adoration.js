function showHowMuchILoveYou (amount) {
    if (typeof amount == 'number' && Number.isInteger(amount) && amount > 0) {
        return `I love you th${'l'.repeat(amount)}s much!`;

    } else {
        throw new Error("I'm really sorry; you're just not my type.")
    }
}

module.exports = {
    showHowMuchILoveYou
}

//console.log(showHowMuchILoveYou(1));
// console.log(showHowMuchILoveYou(100));
// console.log(showHowMuchILoveYou(1000));
