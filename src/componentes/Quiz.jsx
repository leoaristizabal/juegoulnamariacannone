import { useState } from "react";

const questions = [
  {
    question: "¿Qué estructura forma la parte más sobresaliente del codo?",
    options: ["Apófisis coronoides", "Cabeza de la ulna", "Olécranon"],
    answer: "Olécranon",
    image: "/olecranon.jpg"
  },
  {
    question: "¿Cuál de estos músculos se inserta en la ulna?",
    options: ["Bíceps braquial", "Tríceps braquial", "Deltoides"],
    answer: "Tríceps braquial",
    image: "/tricepbranquial.jpg"
  },
  {
    question: "¿Dónde se origina el flexor profundo de los dedos?",
    options: ["Radio distal", "Cara posterior del húmero", "Cara anterior de la ulna"],
    answer: "Cara anterior de la ulna",
    image: "/flexor.png"
  },
  {
    question: "¿Qué es la apófisis coronoides?",
    options: ["Una inserción del tríceps", "Una prominencia anterior de la ulna", "Una articulación con el carpo"],
    answer: "Una prominencia anterior de la ulna",
    image: "/coronoide.png"
  },
];


const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result">
          <h2>Tu puntuación: {score} / {questions.length}</h2>
        </div>
      ) : (
        <div className="question-block">
  <h4>Puntaje: {score} / {questions.length}</h4> {/* <- Esto es nuevo */}
  <h3>{questions[current].question}</h3>
  {questions[current].image && (
    <img
      src={questions[current].image}
      alt="Imagen de la pregunta"
      className="question-image"
    />
  )}
  <div className="options">
    {questions[current].options.map((option, idx) => (
      <button
        key={idx}
        className="btn"
        onClick={() => handleAnswer(option)}
      >
        {option}
      </button>
    ))}
  </div>
</div>
      )}
    </div>
  );
};

export default Quiz;
