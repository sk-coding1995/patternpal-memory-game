# Testing - PatternPal Memory Game

## Testing overview
The game was tested manually during development and after implementing core features. The aim of testing was to check functionality, usability, and consistency of the memory game.

## Manual testing record

### Card flip

Clicked on different cards in the game.
Expected: The card reveals its hidden emoji.
Result: Cards revealed correctly when clicked (Pass)

### Matching cards

Selected two cards with the same emoji.
Expected: Both cards remain visible and are marked as matched.
Result: Matching cards stayed visible and were marked correctly (Pass)

### Non-matching cards

Selected two different cards.
Expected: Cards flip back after a short delay.
Result: Cards reset correctly after delay (Pass)

### Move counter

Selected two cards.
Expected: Move counter increases by 1.
Result: Move counter updated correctly (Pass)

### Win condition

Matched all pairs in the game.
Expected: A win message is displayed and restart button becomes available.
Result: Win message displayed correctly and restart button enabled (Pass)

### Restart button

Clicked the restart button after completing the game.
Expected: Game resets and cards are shuffled.
Result: Game resets correctly and moves returned to 0 (Pass)