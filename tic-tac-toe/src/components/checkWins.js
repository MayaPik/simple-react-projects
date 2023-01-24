function CheckWins(boardState) {
  function getAllIndexes(arr, val) {
    var indexes = [],
      i;
    for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
    return indexes;
  }

  let xIndex = getAllIndexes(boardState, "X");
  let oIndex = getAllIndexes(boardState, "O");

  let patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let pattern of patterns) {
    let countX = 0;
    let countO = 0;
    for (let index of pattern) {
      if (xIndex.includes(index)) {
        countX++;
      }
      if (oIndex.includes(index)) {
        countO++;
      }
    }
    if (countX === 3) {
      return "X won";
    }
    if (countO === 3) {
      return "O won";
    }
  }
  if (boardState.indexOf("") === -1) {
    return "DRAW";
  }
  return;
}
export default CheckWins;
