console.log("JS connected");
// Stores card values in pairs matching logic
const cardValues = [
    "🍎","🍎",
    "🍌","🍌",
    "🍇","🍇",
    "🥭","🥭",
    "🍓","🍓",
    "🍍","🍍",
    "🥝","🥝",
    "🍉","🍉"
];

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
// Select game grid from the DOM
const grid = document.getElementById("gameGrid");

/*
   Dynamically create cards from the cardValues array
   Keeps UI in sync with game data
*/
cardValues.forEach(value => {

    let col = document.createElement("div");
    col.classList.add("col-3");

    let card = document.createElement("div");
    card.classList.add("card");

    // Store value for matching logic
    card.dataset.value = value;

    // Hide value initially
    card.textContent = "?";

    col.appendChild(card);
    grid.appendChild(col);
});

// Track selected cards
let firstCard = null;
let secondCard = null;

// Prevent user interaction during card check
let lockBoard = false;

// Track number of moves
let moves = 0;

let winTimer = null;
const instructions = document.getElementById("instructions");

// Disable restart button at start
document.getElementById("restartBtn").disabled = true;

// Attach click events to all cards
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("click", () => {
       
        // Prevent interaction while cards are resetting
        if (lockBoard) return;

        // Prevent clicking the same card twice
        if (card === firstCard) return;

        // Prevent clicking already matched cards
        if (card.classList.contains("matched")) return;

        // Reveal card value
        card.textContent = card.dataset.value;
        card.classList.add("flipped");

        if (instructions) {
            instructions.style.display = "none";
        }

        if (!firstCard) {
            firstCard = card;
            return;
        }

        secondCard = card;

        // Increment moves when second card is selected
        moves++;
        document.getElementById("moves").textContent = `Moves: ${moves}`;

        // Lock board during match check
        lockBoard = true;

        // Check for match
        if (firstCard.dataset.value === secondCard.dataset.value) {

            // Mark both cards as matched (prevents future clicks)
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");

            // Remove flipped state so green shows
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");

            // Check if the game is finished
            checkWin();

            // Slight delay before resetting selection
            setTimeout(() => {
                resetSelection();
            }, 300);

        } else {

            // Flip cards back after delay
            setTimeout(() => {
                firstCard.textContent = "?";
                secondCard.textContent = "?";
                firstCard.classList.remove("flipped");
                secondCard.classList.remove("flipped");
                resetSelection();
            }, 1000);

        }

    });
});

// Reset selection state
function resetSelection() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

// Reset the entire game
function resetGame() {

    if (winTimer) {
        clearTimeout(winTimer);
    }

    // Shuffle cards again
    shuffle(cardValues);

    // Reset moves
    moves = 0;
    document.getElementById("moves").textContent = "Moves: 0";

    //Clear win message
    document.getElementById("gameStatus").textContent = "";

    if (instructions) {
        instructions.style.display = "block";
    }

    // Reset cards visually and logically
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.classList.remove("matched");
        card.classList.remove("flipped");
        card.textContent = "?";

        // Update card values to match shuffled array
        card.dataset.value = cardValues[index];
    });

    // Reset selection variables
    firstCard = null;
    secondCard = null;
    lockBoard = false;

    // Disable restart button until game is won again
    document.getElementById("restartBtn").disabled = true;

}

// Check if all cards are matched
function checkWin() {
    const matchedCards = document.querySelectorAll(".matched");

    // If all cards are matched, show win message
    if (matchedCards.length === document.querySelectorAll(".card").length) {
        winTimer = setTimeout(() => {

            // Show message on screen
            document.getElementById("gameStatus").textContent = 
            "🎉 You completed the game in " + moves + " moves!";

            // Enable restart button after winning
            document.getElementById("restartBtn").disabled = false;

    }, 300);
    }
}

// Restart button functionality
document.getElementById("restartBtn").addEventListener("click", () => {
    resetGame();
});