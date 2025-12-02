const MIN_NUMBER = 1;
const MAX_ATTEMPTS = 3; 

let secretNumber;
let attempts = 0;
let currentMaxNumber; 

const guessInput = document.getElementById('guessInput'); 
const submitButton = document.querySelector('.container button');
const resultMessage = document.getElementById('result');
const SelectedDifficulty = document.getElementById('difficulty');

function initializeGame() {
    
    currentMaxNumber = parseInt(SelectedDifficulty.value, 10);

  
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    
    
    resultMessage.textContent = `I have selected a number between ${MIN_NUMBER} and ${currentMaxNumber}. Start guessing! You have ${MAX_ATTEMPTS} attempts.`;
    resultMessage.style.color = '#333';
    
    
    guessInput.value = '';
    guessInput.disabled = false;
    guessInput.setAttribute('placeholder', `Enter your guess (1-${currentMaxNumber})`);
    submitButton.textContent = 'Submit Guess';
    
    submitButton.removeEventListener('click', handleReset);
    submitButton.addEventListener('click', handleGuess);
}

function handleGuess() {
    const guess = parseInt(guessInput.value.trim(), 10);
    
    if (isNaN(guess) || guess < MIN_NUMBER || guess > currentMaxNumber) {
        resultMessage.textContent = `Error: Enter a whole number between ${MIN_NUMBER} and ${currentMaxNumber}.`;
        resultMessage.style.color = '#dc3545';
        guessInput.value = '';
        return;
    }

    attempts++;
    
    if (guess === secretNumber) {
        // Success
        resultMessage.textContent = `You got it! The number was ${secretNumber}. Total attempts: ${attempts} out of ${MAX_ATTEMPTS}.`;
        resultMessage.style.color = '#28a745';
        
        guessInput.disabled = true;
        submitButton.textContent = 'Play Again';
        submitButton.removeEventListener('click', handleGuess);
        submitButton.addEventListener('click', handleReset);

    } else {
        
        if (attempts >= MAX_ATTEMPTS) {
            resultMessage.textContent = `Game Over!  You ran out of attempts. The secret number was ${secretNumber}.`;
            resultMessage.style.color = '#dc3545'; 
            
            guessInput.disabled = true;
            submitButton.textContent = 'Play Again';
            submitButton.removeEventListener('click', handleGuess);
            submitButton.addEventListener('click', handleReset);
            return; 
        }

        const feedback = (guess < secretNumber) ? 'Too low! Go higher.' : 'Too high! Go lower.';
        resultMessage.textContent = `${feedback} (Attempts: ${attempts}/${MAX_ATTEMPTS})`;
        resultMessage.style.color = (guess < secretNumber) ? '#ffc107' : '#007bff';
        
        guessInput.value = '';
        guessInput.focus();
    }
}

function handleReset() {
    initializeGame();
}



initializeGame();

submitButton.addEventListener('click', handleGuess);

// Listener to reset the game when difficulty changes
SelectedDifficulty.addEventListener('change', initializeGame);

// Allow 'Enter' key submission
guessInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !guessInput.disabled) {
        event.preventDefault();
        handleGuess();
    }
});