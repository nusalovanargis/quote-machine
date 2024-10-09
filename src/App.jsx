import React, { useState } from 'react';

const quotes = [
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
  { text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
];

const colors = ['#77b1a9', '#73a857', '#b44d3e', '#4aaab9', '#5c8374'];

function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [bgColor, setBgColor] = useState(colors[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setQuote(quotes[randomIndex]);
    setBgColor(randomColor);
  };

  return (
    <div
      id="quote-box"
      className="quote-box"
      style={{ backgroundColor: bgColor, minHeight: '100vh' }}
    >
      <div className="quote-container">
        <div id="text" style={{ color: bgColor }}>
          <p>{quote.text}</p>
        </div>
        <div id="author" style={{ color: bgColor }}>
          <p>- {quote.author}</p>
        </div>
        <div className="buttons">
          <button id="new-quote" onClick={getRandomQuote} style={{ backgroundColor: bgColor }}>
            New Quote
          </button>
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: bgColor }}
          >
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
