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

// Attach click events to all cards 
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("click", () => {
        
        // Prevent interaction while cards are resetting
        if (lockBoard) return;

        // Prevent clicking the same card twice
        if (card === firstCard) return;

        // Reveal card value
        card.textContent = card.dataset.value;

        if (!firstCard) {
            firstCard = card; 
            return;
        }
        
        secondCard = card;

        // Lock board during match check
        lockBoard = true;

        // Check for match
        if (firstCard.dataset.value === secondCard.dataset.value) {

            // Keep cards revealed
            resetSelection();

        } else {

            // Flip cards back after delay
            setTimeout(() => {
                firstCard.textContent = "?";
                secondCard.textContent = "?";
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