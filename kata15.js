const generateBoard = function(whiteQ, blackQ) {
  let boardLine = [];
  let board = [];
  for (horizontalLine = 0; horizontalLine < 8; horizontalLine++) {
    for (verticalLine = 0; verticalLine < 8; verticalLine++) {
      if ((whiteQ[0] == horizontalLine && whiteQ[1] == verticalLine)
        || (blackQ[0] == horizontalLine && blackQ[1] == verticalLine)) {
        boardLine.push(1);
      } else {
        boardLine.push(0);
      }
    }
    board.push(boardLine);
    boardLine = [];
  }
  return (board);
};
const queenThreat = function(generatedBoard) {
  let threat = false;

  // check horizontal lines
  if (blackQueen[0] == whiteQueen[0]) {
    threat = true;
  }

  // check vertical lines
  if (blackQueen[1] == whiteQueen[1]) {
    threat = true;
  }
  // check diagonal lines
  if (blackQueen[0] - blackQueen[1] == whiteQueen[0] - whiteQueen[1]
    || whiteQueen[0] - whiteQueen[1] == blackQueen[0] - blackQueen[1]
    || whiteQueen[0] + whiteQueen[1] == blackQueen[0] + blackQueen[1]
    || blackQueen[0] + blackQueen[1] == whiteQueen[0] + whiteQueen[1]) {
    threat = true;
  }
  return (threat);
};
let whiteQueen = [0, 0];
let blackQueen = [7, 5];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
