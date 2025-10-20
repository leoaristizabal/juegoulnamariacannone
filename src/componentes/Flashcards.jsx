import { useState } from "react";
import { flashcards } from "../data/ulnaData";

const Flashcards = () => {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setShowAnswer(false);
    setIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  return (
    <div className="card-container">
      <div
        className="flashcard"
        onClick={() => setShowAnswer(!showAnswer)}
        style={{ cursor: "pointer" }}
      >
        {showAnswer ? flashcards[index].answer : flashcards[index].question}
      </div>
      <button onClick={nextCard} className="btn">
        Siguiente
      </button>
    </div>
  );
};

export default Flashcards;
