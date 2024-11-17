import { useEffect, useState } from "react";
import { WORD_ARRAY, MAX_ATTEMPTS, MAX_COLS } from "./constant";
import "./styles.css";
import Line from "./Line";

export default function App() {
  const randomIndex = Math.floor(Math.random() * WORD_ARRAY.length);
  const [word, setWord] = useState(WORD_ARRAY[randomIndex]);
  const [guesses, setGuesses] = useState([]);
  const [curGuesses, setCurGuesses] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  const handleRetry = () => {
    setGuesses([]);
    setCurGuesses("");
    setIsGameOver(false);
  };

  const handleKeyDown = (e) => {
    if (isGameOver) return;

    if (e.key === "Enter") {
      if (curGuesses.length === MAX_COLS) {
        if (curGuesses === word) {
          setIsGameOver(true);
        } else {
          setGuesses((prevGuesses) => [...prevGuesses, curGuesses]);
          setCurGuesses("");
        }
      } else {
        console.log("Not enough letters.");
      }
    } else if (e.key === "Backspace") {
      setCurGuesses((prev) => prev.slice(0, -1));
    } else if (
      e.key.length === 1 &&
      e.key.match(/[a-zA-Z]/) &&
      curGuesses.length < MAX_COLS
    ) {
      setCurGuesses((prev) => prev + e.key.toUpperCase());
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [curGuesses, isGameOver]);

  console.log(word);
  return (
    <div className="App">
      <h1>
        {isGameOver ? `Congratulations! The word was ${word}!` : "Wordle"}
      </h1>
      <div className={`mainContainer ${isGameOver && "isGameOver"}`}>
        <Line word={word} guesses={guesses} curGuesses={curGuesses} />
      </div>
      <button className="handleRetry" onClick={handleRetry}>
        Retry
      </button>
    </div>
  );
}
