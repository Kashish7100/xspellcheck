import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function App() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleTextChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    checkSpelling(inputText);
  };

  const checkSpelling = (inputText) => {
    const words = inputText.split(" ");

    for (let word of words) {
      const lowerWord = word.toLowerCase();
      if (customDictionary[lowerWord]) {
        setSuggestion(`Did you mean: ${customDictionary[lowerWord]}?`);
        return;
      }
    }
    
    setSuggestion("");
  };

  return (
    <div className="container">
      <h2>Spell Check and Auto-Correction</h2>
      <textarea
        placeholder="Type here..."
        value={text}
        onChange={handleTextChange}
      />
      {suggestion && <p className="suggestion">{suggestion}</p>}
    </div>
  );
}

export default App;
