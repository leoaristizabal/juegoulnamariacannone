import { useState } from "react";

const questions = [
  {
    question: "¿Qué tipo de hueso es la ulna?",
    options: ["Plano", "Corto", "Irregular", "Largo"],
    answer: "Largo",
    image: "/flexor.png"
  },
  {
    question: "¿Qué estructura se palpa fácilmente en la parte posterior del codo cuando está flexionado?",
    options: ["Apófisis estiloides", "Cabeza de la ulna", "Olécranon", "Tuberosidad de la ulna"],
    answer: "Olécranon",
    image: "/olecranon.jpg"
  },
  {
    question: "¿Qué músculo se inserta en la cara posterior del olécranon?",
    options: ["Supinador", "Tríceps braquial", "Braquial", "Flexor profundo de los dedos"],
    answer: "Tríceps braquial",
    image: "/tricepbranquial.jpg"
  },
  {
    question: "¿Qué músculo se inserta en la cara anterior de la ulna, justo debajo del extremo proximal?",
    options: ["Pronador redondo", "Extensor cubital del carpo", "Braquial", "Flexor radial del carpo"],
    answer: "Braquial",
    image: "/coronoide.png"
  },
  {
    question: "¿Qué parte de la ulna presenta la apófisis estiloides?",
    options: ["Extremo distal", "Extremo proximal", "Cara anterior", "Borde lateral"],
    answer: "Extremo distal",
    image: "/flexor.png"
  },
  {
    question: "¿Qué músculo se origina en la cara anterior del extremo distal de la ulna?",
    options: ["Supinador", "Pronador cuadrado", "Extensor de los dedos", "Braquiorradial"],
    answer: "Pronador cuadrado",
    image: "/coronoide.png"
  },
  {
    question: "¿Qué parte de la ulna sirve de punto de inserción para el tríceps braquial?",
    options: ["Olécranon", "Apófisis estiloides", "Tuberosidad de la ulna", "Cabeza de la ulna"],
    answer: "Olécranon",
    image: "/olecranon.jpg"
  },
  {
    question: "¿Qué estructura se encuentra entre la apófisis coronoides y el olécranon?",
    options: ["Fosa radial", "Escotadura troclear (superficie articular para el húmero)", "Cabeza de la ulna", "Apófisis estiloides"],
    answer: "Escotadura troclear (superficie articular para el húmero)",
    image: "/tricepbranquial.jpg"
  },
  {
    question: "¿En qué extremo de la ulna se localiza la cabeza del hueso?",
    options: ["Extremo proximal", "Extremo distal", "En el centro del cuerpo", "Ninguno de los anteriores"],
    answer: "Extremo distal",
    image: "/flexor.png"
  },
  {
    question: "¿Qué tipo de superficie presenta la parte superior de la ulna para articularse con el húmero?",
    options: ["Convexa", "Cóncava", "Plana", "Irregular"],
    answer: "Cóncava",
    image: "/coronoide.png"
  },
  {
    question: "¿Qué accidente óseo marca el límite entre la diáfisis y la epífisis proximal de la ulna?",
    options: ["Tuberosidad ulnar", "Escotadura radial", "Olécranon"],
    answer: "Tuberosidad ulnar",
    image: "/flexor.png"
  },
  {
    question: "¿Cuáles son las caras de la ulna?",
    options: ["Anterior, posterior y lateral", "Superior, inferior y medial", "Anterior, posterior y medial", "Medial, lateral y profunda"],
    answer: "Anterior, posterior y medial",
    image: "/olecranon.jpg"
  },
  {
    question: "¿Cuál de los siguientes es un borde de la ulna?",
    options: ["Borde intercondíleo", "Borde lateral", "Borde interóseo", "Borde transverso"],
    answer: "Borde interóseo",
    image: "/tricepbranquial.jpg"
  }
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
          <h4>Puntaje: {score} / {questions.length}</h4>
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
