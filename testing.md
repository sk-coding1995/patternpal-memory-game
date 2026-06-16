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

## Additional testing

### Clicking same card twice

Clicked the same card twice.
Expected: The same card should not count as a move or break the game logic.
Result: Second click was ignored and no issues occurred (Pass)

### Clicking very fast

Clicked multiple cards quickly.
Expected: Game should prevent errors during rapid clicks.
Result: Game handled input correctly without breaking (Pass)

### Clicking matched cards

Clicked cards that were already matched.
Expected: Matched cards should not be clickable.
Result: Matched cards could not be clicked again (Pass)

### Restart button availability

Attempted to click the restart button before completing the game. 
Expected: Restart button should be disabled until the game is completed.
Result: Restart button was disabled during gameplay and only became active after winning (pass)

## Bugs found and fixes applied

### Bug 1 - Same card could be clicked twice

Issue: The same card could be selected twice, which could affect the matching logic.  
Fix: A condition was added to stop the same card being selected again during the same turn.  
Result: Repeated clicks on the same card are now ignored.

### Bug 2 - Matched cards were still clickable

Issue: Cards that had already been matched could still be clicked again.  
Fix: A check was added to ignore cards that already had the matched class.  
Result: Matched cards can no longer be selected again.

### Bug 3 - Rapid clicking caused interaction problems

Issue: Clicking cards very quickly caused inconsistent behaviour while the game was checking matches.  
Fix: A lock system was added to temporarily block user interaction during card checking.  
Result: The game now handles rapid input more reliably.

### Bug 4 - Move counter needed refining

Issue: Move counting needed to be controlled so that only valid second-card selections increased the total.  
Fix: The counter was updated so moves only increase when a valid second card is selected.  
Result: The move counter now reflects gameplay more accurately.