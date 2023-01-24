import { useEffect, useState } from "react";
import { Box } from "@mui/system";

import CheckWins from "./checkWins";

function Board({
  style,
  setStyle,
  winner,
  setWinner,
  gameStarted,
  setGameStarted,
}) {
  const [boardState, setBoardState] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [turn, setTurn] = useState(0);
  const [player, setPlayer] = useState("X");

  const play = (i) => {
    if (!gameStarted) {
      setGameStarted(true);
    }
    if (boardState[i] === "" && winner === undefined) {
      setBoardState((prevBoardState) => {
        const newBoardState = [...prevBoardState];
        newBoardState[i] = player;
        return newBoardState;
      });
      if (style === true) {
        setBoardState((prevBoardState) => {
          const newBoardState = [...prevBoardState];
          let emptyArr = getAllIndexes(newBoardState, "");
          let RandomEmptyNumber =
            emptyArr[Math.floor(Math.random() * emptyArr.length)];
          newBoardState[RandomEmptyNumber] = "O";
          return newBoardState;
        });
      } else {
        setTurn(turn === 0 ? 1 : 0);
      }
    }
  };

  function getAllIndexes(arr, val) {
    var indexes = [],
      i;
    for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
    return indexes;
  }
  useEffect(() => {
    if (turn === 0) {
      setPlayer("X");
    }
    if (turn === 1) {
      setPlayer("O");
    }
  }, [turn]);

  useEffect(() => {
    const winner = CheckWins(boardState);
    if (winner) {
      setWinner(winner);
    }
  }, [boardState, setWinner]);

  return (
    <div>
      <Box
        sx={{
          width: 400,
          height: 400,
          backgroundColor: "rgb(241, 219, 222)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {boardState.map((square, i) => (
          <Box
            sx={{
              width: 100,
              height: 100,
              display: "flex",
              border: "solid 1px aqua",
              backgroundColor: "blue",
              color: "white",
              fontSize: "45px",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={i}
            onClick={() => play(i)}
          >
            {square}
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default Board;
