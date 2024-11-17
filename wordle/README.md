# Wordle Game

## Overview
The Wordle Game is a simple version of the popular word puzzle game, built using React. The objective is to guess the correct 5-letter word within a set number of attempts. Each time you make a guess, the app provides feedback on whether each letter is correct, exists in the word, or is not in the word at all.

This project is designed to help improve your React skills, particularly in handling state management, user interactions, and conditional rendering.

## Features
- **Guessing game**: Try to guess a 5-letter word.
- **Feedback system**: Colors change based on whether letters are correct, exist in the word, or not present at all.
- **Game over state**: The game will display a "Congratulations!" message when you win or allow you to retry after the game ends.
- **Responsive design**: The app is designed to look good on all screen sizes.

## Technologies Used
- **React** (for building the user interface)
- **CSS** (for styling and animations)
- **JavaScript** (ES6+)

## Getting Started


### Installation
1. Clone the repository to your local machine:

2. Navigate into the project directory:
    ```bash
    cd wordle-game
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
5. Open your browser and go to `http://localhost:3000` to play the game.

## How to Play
- The game presents you with a 5x6 grid where you can make up to 6 guesses.
- Each time you type a word and submit it, you'll get feedback:
  - **Green** means the letter is in the correct position.
  - **Yellow** means the letter exists in the word but is in the wrong position.
  - **Gray** means the letter is not in the word.
- You win if you guess the correct word within 6 attempts. If you fail, the game will show you the correct word and allow you to retry.

## Customization
- You can change the word length or number of attempts by modifying the constants in the code (`MAX_ATTEMPTS`, `MAX_COLS`, etc.).
- The game’s design and color scheme can be customized by editing the CSS file.

## Contributing
If you'd like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. All contributions are welcome!

## Acknowledgments
- Inspiration from the original Wordle game.
- React and CSS for building a simple, interactive user interface.

