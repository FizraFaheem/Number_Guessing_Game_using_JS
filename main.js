 // Number Guessing Game
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guess = null;

while (guess !== randomNumber) {
    guess = parseInt(prompt('Guess a number between 1 and 100:'));
    attempts++;

    if (isNaN(guess)) {
        alert('Please enter a valid number.');
    } else if (guess < randomNumber) {
        alert('Too low! Try again.');
    } else if (guess > randomNumber) {
        alert('Too high! Try again.');
    } else {
        alert(`Congratulations! You guessed the number in ${attempts} attempts.Thanks!!!!`);
    }
}