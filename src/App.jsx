import Flashcards from './componentes/Flashcards';
import Quiz from './componentes/Quiz';
import './index.css';

function App() {
  return (
    <div>
      <header className="student-header">
        <h2>Universidad Central de Venezuela</h2>
        <h3>Facultad de Medicina - Escuela Luis Razetti</h3>
        <p>Estudiante: Maria Vittoria Cannone S.</p>
        <p>Cédula: V-31.455.085</p>
        <p>Unidad: 1 - Sistema Óseo (Ulna)</p>
      </header>

      <h1>Juego Educativo: Ulna</h1>
      <p className='subtitulo1'>Toca la pregunta para obtener la respuesta</p>
      <Flashcards />
      <hr style={{ margin: '3rem 0' }} />
      <Quiz />
    </div>
  );
}

export default App;
