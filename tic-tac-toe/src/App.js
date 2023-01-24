import { useEffect, useState } from "react";

import Info from "./components/Info";
import Board from "./components/board";
import "./App.css";

function App() {
  const [style, setStyle] = useState(true);
  const [restart, setRestart] = useState(false);
  const [winner, setWinner] = useState(undefined);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (restart) {
      window.location.reload();
    }
  }, [restart]);

  return (
    <div className="body">
      <Info
        style={style}
        restart={restart}
        setStyle={setStyle}
        setRestart={setRestart}
        gameStarted={gameStarted}
      />
      <Board
        style={style}
        winner={winner}
        setStyle={setStyle}
        setWinner={setWinner}
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
      />
      {winner && <h1 className="result">{winner}</h1>}
    </div>
  );
}

export default App;
