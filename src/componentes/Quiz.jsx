import { useState } from "react";

const questions = [
  {
    question: "¿Qué reparo anatómico se encuentra en la epífisis distal de la ulna?",
    options: [
      "Apófisis coronoides",
      "Olécranon",
      "Cabeza de la ulna",
      "Tuberosidad de la ulna"
    ],
    answer: "Cabeza de la ulna",
    image: "/p1.jpeg"
  },
  {
    question: "¿Dónde se origina el pronador cuadrado?",
    options: [
      "En la cara anterior del cuarto distal de la ulna",
      "En la cara posterior del radio",
      "En la apófisis coronoides de la ulna",
      "En el extremo proximal del húmero"
    ],
    answer: "En la cara anterior del cuarto distal de la ulna",
    image: "/p2.jpeg"
  },
  {
    question: "¿Dónde se ubica el olécranon?",
    options: [
      "En la epífisis distal de la ulna",
      "En el extremo proximal y posterior de la ulna",
      "En la cara medial del radio",
      "En la diáfisis de la ulna"
    ],
    answer: "En el extremo proximal y posterior de la ulna",
    image: "/p3.jpeg"
  },
  {
    question: "¿Dónde se articula la ulna con el húmero?",
    options: [
      "En la incisura troclear",
      "En la cabeza del radio",
      "En la tróclea del radio",
      "En el cóndilo lateral del húmero"
    ],
    answer: "En la incisura troclear",
    image: "/p4.jpeg"
  },
  {
    question: "¿Qué músculo se inserta en la apófisis coronoides de la ulna?",
    options: [
      "Pronador redondo",
      "Braquial",
      "Supinador",
      "Bíceps braquial"
    ],
    answer: "Braquial",
    image: "/p5.jpeg"
  },
  {
    question: "¿Qué parte de la ulna participa en la articulación radiocubital distal?",
    options: [
      "Olécranon",
      "Tuberosidad de la ulna",
      "Cabeza de la ulna",
      "Apófisis coronoides"
    ],
    answer: "Cabeza de la ulna",
    image: "/p6.jpeg"
  },
  {
    question: "¿Cuál es la función principal de la ulna en el brazo?",
    options: [
      "Permitir la rotación del antebrazo",
      "Servir como hueso estabilizador del antebrazo",
      "Ser el punto de inserción del bíceps braquial",
      "Proteger el nervio radial"
    ],
    answer: "Servir como hueso estabilizador del antebrazo",
    image: "/p7.jpeg"
  },
  {
    question: "¿Dónde se inserta el músculo braquial?",
    options: [
      "En la tuberosidad y apófisis coronoides de la ulna",
      "En la cabeza del radio",
      "En la apófisis estiloides de la ulna",
      "En el olécranon"
    ],
    answer: "En la tuberosidad y apófisis coronoides de la ulna",
    image: "/p8.jpeg"
  },
  {
    question: "¿Cuáles son las caras de la ulna?",
    options: [
      "Anterior, posterior y lateral",
      "Superior, inferior y medial",
      "Anterior, posterior y medial",
      "Medial, lateral y profunda"
    ],
    answer: "Anterior, posterior y medial",
    image: "/p9.jpeg"
  },
  {
    question: "¿Cuál de los siguientes es un borde de la ulna?",
    options: [
      "Borde intercondileo",
      "Borde lateral",
      "Borde interóseo",
      "Borde transverso"
    ],
    answer: "Borde interóseo",
    image: "/p10.jpeg"
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
