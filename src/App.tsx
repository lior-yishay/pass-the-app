import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]); // Stores IDs
  const [moves, setMoves] = useState(0);

  // Initialize and Shuffle Game
  const initializeGame = () => {
    const shuffledCards = [...EMOJIS, ...EMOJIS]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  // Handle Card Click
  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].isFlipped || cards[id].isMatched) return;

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    // Update the card UI to show it's flipped
    setCards(prev => prev.map(card => card.id === id ? { ...card, isFlipped: true } : card));

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      checkMatch(newFlipped);
    }
  };

  const checkMatch = ([id1, id2]: number[]) => {
    if (cards[id1].emoji === cards[id2].emoji) {
      // Match found!
      setCards(prev => prev.map(card => 
        (card.id === id1 || card.id === id2) ? { ...card, isMatched: true } : card
      ));
      setFlippedCards([]);
    } else {
      // No match - flip them back after 1 second
      setTimeout(() => {
        setCards(prev => prev.map(card => 
          (card.id === id1 || card.id === id2) ? { ...card, isFlipped: false } : card
        ));
        setFlippedCards([]);
      }, 1000);
    }
  };

  return (
    <div className="game-container">
      <h1>Memory Match</h1>
      <p>Moves: {moves}</p>
      <div className="grid">
        {cards.map(card => (
          <div 
            key={card.id} 
            className={`card ${card.isFlipped || card.isMatched ? 'flipped' : ''}`}
            onClick={() => handleCardClick(card.id)}
          >
            {card.isFlipped || card.isMatched ? card.emoji : "?"}
          </div>
        ))}
      </div>
      <button onClick={initializeGame}>Restart Game</button>
    </div>
  );
}



/*
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
  */
