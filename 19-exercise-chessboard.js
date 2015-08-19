var size = 8;
var chessboard = "";


for(var y = 1; y <= size; y++) {
    for(var x = 1; x <= size; x++) {
        if(x % 2 == 0) {
            chessboard += " ";
        } else {
            chessboard += "#";
        }
    }
    chessboard += "\n";

    if(y % 2 == 1)
        chessboard += " ";
    
}

console.log(chessboard);

/*
    // Book solutiion:
    var size = 8;

    var board = "";

    for (var y = 0; y < size; y++) {
      for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
          board += " ";
        else
          board += "#";
      }
      board += "\n";
    }

    console.log(board);
*/