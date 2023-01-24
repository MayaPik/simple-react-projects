import { Button, ButtonGroup } from "@mui/material";

const Info = ({ style, setStyle, restart, setRestart, gameStarted }) => {
  const updateStyle = (event) => {
    setStyle(Boolean(event.target.value));
  };

  const restartGame = () => {
    setRestart(true);
  };

  return (
    <div className="info">
      <h1>React Tic-Tac-Toe</h1>
      <ButtonGroup size="large" aria-label="large button group" sx={{ mb: 5 }}>
        <Button
          disabled={gameStarted}
          className="player"
          onClick={updateStyle}
          value={true}
        >
          1 Player
        </Button>
        <Button
          disabled={gameStarted}
          className="player"
          onClick={updateStyle}
          value={false}
        >
          2 Players
        </Button>
        <Button className="player" onClick={restartGame}>
          Restart Game
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Info;
