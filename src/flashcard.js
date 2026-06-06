import React, { useState } from "react";

export const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);
  const { question, options, correct } = flashcard;
  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        {question}
        <div className="flashcard-options">
          {options.map((option) => {
            return (
              <div key={option} className="flashcard-option">
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="back">{correct}</div>
    </div>
  );
};
