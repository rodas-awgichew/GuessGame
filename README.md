# GuessGame

A simple number guessing game built with plain HTML, CSS, and JavaScript. This project provides a small, accessible, and responsive browser game where the player tries to guess a randomly generated number within a range.


Features
- Pick a number in a configurable range (default 1–50).
- Feedback for each guess: "Too high", "Too low", or "Correct!"
- Track number of attempts and show best score.
- Simple, responsive UI with keyboard and touch support.


Gameplay
- The game picks a secret number within a configured range.
- Enter your guess and submit.
- The UI tells you whether your guess is higher or lower than the secret number.
- When you guess correctly, the game shows a success message and your attempt count.
- Click "Play Again" to start a new round.


File structure
- index.html — main HTML file and UI skeleton
- styles.css — styling and responsive layout
- script.js — game logic, event handlers, persistence
- README.md — this readme

How it work
- On load, the script generates a secret number.
- Each guess is validated and compared to the secret number.
- Feedback is rendered and attempts are counted.
- Winning updates the best score in localStorage.


Contributing
Contributions are welcome. Please open issues for bugs or feature requests and submit pull requests for fixes or improvements. Keep changes focused and include a short description of why the change helps.

License
This project is provided under the MIT License. See the LICENSE file for details.
