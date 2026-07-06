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

### Bug 5 - Win condition did not trigger due to a typo

Issue: The win message did not appear because the length property was written incorrectly.  
Fix: The typo was corrected in the win condition logic.  
Result: The game now detects when all cards are matched and displays the win message correctly.

### Bug 6 - checkWin function was duplicated

Issue: The checkWin function was accidentally duplicated, which caused incorrect structure in the JavaScript file.  
Fix: The duplicate function was removed and the logic was kept in a single clean function.  
Result: The win condition code is now easier to follow and works correctly.

### Bug 7 - resetGame was referenced before being fully created

Issue: The resetGame function was called in the win logic before the function had actually been added to the file.  
Fix: The missing resetGame function was then implemented properly.  
Result: The replay feature now works as intended.

### Bug 8 - Reset shuffled the data but not the displayed card values

Issue: After resetting the game, the card values were shuffled internally but were not updated correctly on screen.  
Fix: Each card’s dataset value was updated after shuffling so the interface matched the shuffled array.  
Result: The game now resets correctly with a new shuffled card order.

### Bug 9 - Restart button stayed enabled after reset

Issue: After restarting the game, the restart button could remain enabled during gameplay.  
Fix: The button was disabled again inside the resetGame function.  
Result: The restart button is now only available after the game has been completed.

### Bug 10 - Flipped styling overrode matched styling

Issue: After adding visual flip feedback, matched cards were still showing the flipped styling instead of the matched state.  
Fix: The flipped class was removed when a correct match was found.  
Result: Matched cards now display the correct visual feedback.

### Bug 11 - Delayed popup could still appear after restarting

Issue: A delayed popup from the win logic could still appear after restarting the game.  
Fix: The timeout was stored in a variable and cleared when the game reset.  
Result: The popup no longer appears unexpectedly after restarting.

### Bug 12 - Advanced flip card structure broke the layout

Issue: A more advanced front/back card structure was tested, but it caused the card layout to break.  
Fix: The advanced version was reverted and the simpler working flip system was kept.  
Result: The game remained stable and visually clear without overcomplicating the implementation.

## Unfixed bugs

### Minor issue - Mirrored emoji during flip effect

Issue: When the card flip effect is active, the emoji can appear slightly mirrored during the animation.  
Reason left unfixed: This does not affect the core functionality of the game and the current version was kept to avoid overcomplicating the implementation.  
Impact: Visual only, with no effect on gameplay.

## Final testing summary

Overall, the PatternPal Memory Game was tested for functionality, interaction, usability and game flow throughout development. Core gameplay features such as card flipping, matching logic, move counting, restart behaviour and win feedback were checked manually as they were implemented.

Additional testing was also carried out for edge cases, including repeated clicks, rapid clicking, clicking matched cards and custom 404 page behaviour. Bugs found during development were documented and fixed step by step in later commits.

The final version of the game is stable, playable and provides clear feedback to the user, with only one minor visual issue remaining that does not affect the main functionality of the project.

