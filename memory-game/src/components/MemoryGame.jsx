import React, { useEffect, useState } from 'react';

function MemoryGame() {
  const [gridSize, setGridSize] = useState(2);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [won, setWon] = useState(false);
  const [solved, setSolved] = useState([]);

  const cardClickHandle = (id) => {
    if (disabled || won) return;
    if (flippedCards.length === 0) {
      setFlippedCards([id]);
      return;
    }
    if (flippedCards.length === 1) {
      setDisabled(true);
      const first = cards.find(card => card.id === flippedCards[0]).number;
      const second = cards.find(card => card.id === id).number;
      setFlippedCards([...flippedCards, id]);
      if (first === second) {
        setSolved([...solved, id, flippedCards[0]]);
        setFlippedCards([]);
        setDisabled(false);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
          setDisabled(false);
        }, 1000);
      }
      return;
    }
  };

  const isFlipped = (id) => flippedCards.includes(id) || solved.includes(id);
  const isSolved = (id) => solved.includes(id);

  const initializeGrid = () => {
    const totalCards = gridSize * gridSize;
    const pairCount = Math.floor(totalCards / 2);
    const numbers = [...Array(pairCount).keys()].map((n) => n + 1);
    const shuffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCards)
      .map((number, index) => ({ id: index, number }));
    return shuffledCards;
  };

  const handleGridSize = (e) => {
    const size = Number(e.target.value);
    if (size >= 2 && size <= 10) {
      setGridSize(size);
    }
  };

  useEffect(() => {
    const newCards = initializeGrid();
    setCards(newCards);
  }, [gridSize]);

  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      setWon(true);
    }
  }, [solved, cards]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className='text-4xl font-extrabold text-blue-600 mb-6'>Memory Game</h1>
      <div className='mb-4'>
        <label htmlFor='grid-size' className='text-lg font-semibold'>Grid Size (Max 10)</label>
        <input
          className='border-2 border-gray-400 rounded px-4 py-2 mt-2'
          type="number"
          id='grid-size'
          min={2}
          max={10}
          value={gridSize}
          onChange={handleGridSize}
        />
      </div>
      {/* Card Board */}
      <div id='card-board' className='grid gap-4 border-4 rounded-lg border-gray-300 p-2'
        style={{ 
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
        }}>
        {cards.map((card) => (
          <div 
            key={card.id} 
            onClick={() => cardClickHandle(card.id)}
            className={`aspect-square flex justify-center items-center text-2xl font-bold cursor-pointer transition-all duration-200 transform hover:scale-105 rounded-lg border-4 ${isFlipped(card.id) ? isSolved(card.id) ? "bg-green-400" : "bg-blue-400" : "bg-gray-200"}`}>
            {isFlipped(card.id) ? card.number : "?"}
          </div>
        ))}
      </div>

      {/* Win Message */}
      {won && <h1 className='text-4xl font-bold text-green-600 mt-6'>You Won!</h1>}

      {/* Reset / Play Again btn */}
      <button
        className='bg-blue-500 text-white font-semibold rounded-lg px-4 py-2 mt-4 transition-all duration-200 hover:bg-blue-600'
        onClick={() => {
          setSolved([]);
          setWon(false);
          setCards(initializeGrid());
        }}
      >
        {won ? "Play Again" : "Reset"}
      </button>
    </div>
  );
}

export default MemoryGame;
