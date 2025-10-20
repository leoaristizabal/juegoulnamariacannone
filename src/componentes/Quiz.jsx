import { useState } from "react";

const questions = [
  {
    question: "¿Qué reparo anatómico se encuentra en la epífisis distal de la ulna?",
    options: ["Apófisis coronoides", "Apófisis estiloides", "Escotadura Radial"],
    answer: "Apófisis estiloides",
    image: "/flexor.png"

  },
  {
    question: "¿El pronador cuadrado se origina en?",
    options: ["Tercio distal de la cara anterior", "Tercio medio de la cara medial", "Tercio distal de la cara posterior"],
    answer: "Tercio distal de la cara anterior",
    image: "/tricepbranquial.jpg"
  },
  {
    question: "¿Dónde está ubicado el olécranon?",
    options: ["En la epífisis distal de la ulna.", "Parte superior de la ulna.", "Parte proximal y posterior de la ulna."],
    answer: "Parte proximal y posterior de la ulna.",
    image: "/olecranon.jpg"
  },
  {
    question: "¿Dónde se articula la ulna con el húmero?",
    options: ["En la escotadura troclear", "En la apófisis coronoides", "En el cuello de la ulna"],
    answer: "En la escotadura troclear",
    image: "/coronoide.png"
  },
  {
    question: "¿Qué músculo se inserta en la apófisis coronoides de la ulna?",
    options: ["Braquial", "Bíceps braquial", "Pronador redondo"],
    answer: "Braquial",
    image: "/flexor.png"
  },
  {
    question: "¿Qué parte de la ulna participa en la articulación radiocubital distal?",
    options: ["Olécranon", "Escotadura troclear", "Cabeza de la ulna"],
    answer: "Cabeza de la ulna",
    image: "/tricepbranquial.jpg"
  },
  {
    question: "¿Cuál es la función principal de la ulna en el antebrazo?",
    options: ["Permite la rotación del brazo", "Forma el eje fijo del antebrazo", "Se une con los huesos del carpo"],
    answer: "Forma el eje fijo del antebrazo",
    image: "/olecranon.jpg"
  },
  {
    question: "El músculo braquial se inserta en…",
    options: ["La apófisis estiloides", "Cresta y fosa del supinador", "Apófisis coronoides y parte adyacente de la tuberosidad de la ulna"],
    answer: "Apófisis coronoides y parte adyacente de la tuberosidad de la ulna",
    image: "/coronoide.png"
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
