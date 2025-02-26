import { useState } from "react";
import Cuadrado from "./Componentes/Cuadrado";
import MostrarTurno from "./Componentes/MostrarTurno";
import GanadorModal from "./Componentes/GanadorModal";
import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti();
import "./index.css";

function App() {
  const turns = {
    x: "×",
    o: "o",
  };
  // Estados
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState(turns.x);
  const [ganador, setGanador] = useState<string | null>(null);
  const [empate, setEmpate] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);

  const winnerCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const comprobarGanador = (tablero: (string | null)[]) => {
    for (const combo of winnerCombos) {
      const [a, b, c] = combo; // como guardar [0, 1, 2] -> a=0,b=1,c=2
      if (
        tablero[a] && // si no es null el valor de esa posición
        tablero[a] === tablero[b] && // compruebo que a y b tengan el mismo valor
        tablero[a] === tablero[c]
      ) {
        return tablero[a]; // simplemente para devolver el valor de un índice ganador -> x/o
      }
    }
    return null;
  };

  // En cada movimiento, actualizar el tablero y hacer comprobaciones
  const updateTablero = (indice: number) => {
    // Comprobar ganador o casilla ya marcada
    if (ganador || tablero[indice]) return;

    // Poner ficha
    const nuevoTablero = [...tablero];
    nuevoTablero[indice] = turno;
    setTablero(nuevoTablero);

    // Comprobar ganador
    const nuevoGanador = comprobarGanador(nuevoTablero);
    if (nuevoGanador) {
      setGanador(nuevoGanador);
      setModalOpen(true);
      jsConfetti.addConfetti();
      return;
    }
    // Empate
    else if (nuevoTablero.every((e) => e !== null)) {
      setEmpate(true);
      setModalOpen(true);
      return;
    }

    // Cambiar turno
    setTurno(turno === turns.x ? turns.o : turns.x);
  };

  const resetearPartida = () => {
    setTablero(Array(9).fill(null));
    setGanador(null);
    setEmpate(false);
    setTurno(turns.x);
    setModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 p-4">
      <div className="flex items-center card bg-base-100 shadow-lg w-96 p-10 mb-40">
        <h1 className="text-center text-4xl font-bold text-primary pb-6">
          Tic Tac Toe
        </h1>
        <button onClick={resetearPartida} className="btn mb-6">
          Resetear partida
        </button>
        <div className="grid grid-cols-3 grid-rows-3  border border-black w-64 h-64">
          {tablero.map((valor, indice) => (
            <Cuadrado
              onClick={() => updateTablero(indice)}
              key={indice}
              indice={indice}
            >
              {valor}
            </Cuadrado>
          ))}
        </div>
        <MostrarTurno turno={turno} turns={turns}></MostrarTurno>
      </div>

      <GanadorModal
        ganador={ganador}
        empate={empate}
        onClose={() => setModalOpen(false)}
        modalOpen={modalOpen}
      ></GanadorModal>
    </div>
  );
}

export default App;
