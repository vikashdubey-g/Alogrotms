var checkStraightLine = function (coordinates) {
    // we are using slope approach to find the number of consitent coordinates
    if (coordinates.length === 2) return true;
    const len = coordinates.length;
    if (!len) return;
    const xDiff = coordinates[1][0] - coordinates[0][0];
    const yDiff = coordinates[1][1] - coordinates[0][1];
    let currXDiff, currYDiff;
    for (let i = 2; i < len; ++i ){
      currXDiff = coordinates[i][0] - coordinates[i - 1][0];
      currYDiff = coordinates[i][1] - coordinates[i - 1][1];
      // (y2 -y1)(x3-x2) = (y3-y2)(x2-x1)
      if ((yDiff * currXDiff) !== (xDiff * currYDiff)) return false;
    }
    return true;
  };
  const checkStraightLineRes =  checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])
  console.log('checkStraightLineRes', checkStraightLineRes)