# Front-end coding challenge

## Task

Let’s play a word game! Create a very basic web application for a game of words.

What you need to do:

### Javascript

Create a Dictionary function or class, which accepts an array of words on initialisation.

The returned object from the function or an instance of the class should have a method which returns a promise and checks if the array of words passed to it exist in the dictionary.

- If all of the words are present in the dictionary, it should resolve the promise.
- If any of the words are not present in the dictionary, it should reject the promise with the words that are not available.

### HTML & Game rules

- Before the game can start and player’s begin taking their turns. The user interface
  should provide:
  - A web api call that provides a list of allowed words that players will take turns trying to match. Use provided src/api.js as a mock
  - An HTML input that accepts an additional list of allowed words. The game should be able to handle 100s of words
    in it’s dictionary. This list becomes the dictionary for the game.
  - An input that accepts the number of players participating in the game.
    (minimum of 2 and a maximum of 4)
  - A “Start” button that starts the game
- After hitting the “Start” button, the screen should now display the player’s number
  and provide an input to accept a comma separated list of words (5 maximum) for
  each player with a “Play” button.

  - On every submit, the application should check the list of words. Each submit counts as a turn.
  - If the list of words is valid, the turn moves on to the next player
  - If the list has invalid words, the turn should stay with the current player.
    The application should show the list of invalid words and ask the user to rectify.
    A resubmit should be counted as another turn.

- Every player should only get a total of 10 tries and whoever gets the maximum number of correct words is the winner. (Can have multiple winners)

  - If a user has already reached the maximum number of tries, the user should be skipped.

- A nice to have would be to show a 2 minutes countdown for each player. (Not mandatory)

### CSS

- Although we are not looking for a very pretty app, do make sure a basic level of alignment is done on all the labels and inputs.
