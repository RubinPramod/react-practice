import { MAX_ATTEMPTS, MAX_COLS } from "./constant";

export default function Line({ word, guesses, curGuesses }) {
  const getClassNames = (rowIndex, colIndex) => {
    const guess = guesses[rowIndex] || "";
    const currentLetter =
      guess[colIndex] ||
      (rowIndex === guesses.length ? curGuesses[colIndex] : null);

    if (currentLetter === word[colIndex]) {
      return "cols correct";
    } else if (word.includes(currentLetter)) {
      return "cols doExist";
    } else {
      return "cols";
    }
  };

  return (
    <>
      {Array.from({ length: MAX_ATTEMPTS }).map((_, rowIndex) => (
        <div className="rows" key={rowIndex}>
          {Array.from({ length: MAX_COLS }).map((_, colIndex) => (
            <div key={colIndex} className={getClassNames(rowIndex, colIndex)}>
              {(guesses[rowIndex] && guesses[rowIndex][colIndex]) ||
                (rowIndex === guesses.length && curGuesses[colIndex]) ||
                ""}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
