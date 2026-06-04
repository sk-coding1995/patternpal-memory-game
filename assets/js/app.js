console.log("JS connected");
// Stores card values in pairs matching logic
const cardValues = ["A", "A", "B", "B", "C", "C", "D", "D"]; 
/*
   Shuffle cards using Fisher-Yates algorithm
   Ensures each game starts with a random order
*/
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Run shuffle before rendering cards
shuffle(cardValues);
