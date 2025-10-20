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
      <h2 className="subtitulo2">Tarjeta {index + 1} de {flashcards.length}</h2>

      <div
        className={`flashcard-inner ${showAnswer ? "flipped" : ""}`}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <div className="flashcard front">
          {flashcards[index].question}
        </div>
        <div className="flashcard back">
          {flashcards[index].answer}
        </div>
      </div>

      <button onClick={nextCard} className="btn">
        Siguiente
      </button>
    </div>
  );
};

export default Flashcards;
