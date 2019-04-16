const blocksAway = function(directions) {
  let currentDirection;
  let eastPos = 0;
  let northPos = 0;
  const endPosition = {
    east: 0,
    north: 0
  };
  if (directions[0] == 'right') {
    currentDirection = 'east';
  } else currentDirection = 'north';

  for (i = 1; i < directions.length; i++) {
    if (currentDirection == 'north') {
      if (i %2 == 0) {
        currentDirection = changeDirections(currentDirection, directions[i]);
      } else {
        northPos += directions[i];
      }
    } else if (currentDirection == 'east') {
      if (i %2 == 0) {
        currentDirection = changeDirections(currentDirection, directions[i]);
      } else {
        eastPos += directions[i];
      }
    } else if (currentDirection == 'south') {
      if (i %2 == 0) {
        currentDirection = changeDirections(currentDirection, directions[i]);
      } else {
        northPos -= directions[i];
      }
    } else if (currentDirection == 'west') {
      if (i %2 == 0) {
        currentDirection = changeDirections(currentDirection, directions[i]);
      } else {
        eastPos -= directions[i];
      }
    }
  }
  endPosition.east = eastPos;
  endPosition.north = northPos;
  return (endPosition);
};

const changeDirections = function(currentDir, newDir) {
  if (currentDir == 'north') {
    if (newDir == 'left') {
      return ('west');
    } else return ('east');
  } else if (currentDir == 'east') {
    if (newDir == 'left') {
      return ('north');
    } else return ('south');
  } else if (currentDir == 'south') {
    if (newDir == 'left') {
      return ('east');
    } else return ('west');
  } else if (currentDir == 'west') {
    if (newDir == 'left') {
      return ('south');
    } else return ('north');
  }
};


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
