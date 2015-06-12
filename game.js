// Used for creating the two dimensional 3x3 array for the board. size is 4 to start at index 1,1 for simplicity.
    var row = 4;
    var col = 4;
// Global Variables to keep track of players
    var playerOne = "playerOne";
    var playerTwo = "Computer";
//Using new Image object to preload images for the board. Images are being hosted off my dropbox
    var X = new Image(); 
    var O = new Image(); 
    O.src = "tic-tac-toe-O.png";
    X.src = "tic-tac-toe-X.png";
//Only if startGame = true does the game start
    startGame = false;
// It's set depending on who's turn it is
    turn = "";
//used for clickbox to check if a player has one if so you can't click the box
    winner = false;
//------------------------------------------


//This listen checks to see if the page fully loaded and then immediately calls the start function.
    document.addEventListener('DOMContentLoaded', function() {start();}, false);

//Gets called by eventListener when page is loaded and starts the game.
    function start(){
    initializeBoard();
      playerTurn();
    }

    function initializeBoard(){
//Initializing the two dimensional array. I add an extra row and column so I can start the index at 1 instead of zero. Using window for global namespace to be able 
//access the array from outside the function.
    window.board = new Array(row);
    for(var i = 0; i < board.length; i++)
    {
        board[i] = new Array(col);
    }
//I filled the board with id's from the table in the html.
        board[1][1] ="pos_1";
        board[1][2] ="pos_2";
        board[1][3] ="pos_3";
        board[2][1] ="pos_4";
        board[2][2] ="pos_5";
        board[2][3] ="pos_6";
        board[3][1] ="pos_7";
        board[3][2] ="pos_8";
        board[3][3] ="pos_9";
        //Resets the tag with an empty string to restart the game.
        for(var i = 1; i <=9; i++){
            document.getElementById("pos_" +i).innerHTML="";
        }
winner = false;
}

//Randomly assigns a player to start the game.
function playerTurn(){
    //if(Math.random() < 0.5){
      turn = "X";
        document.getElementById("playerName").innerHTML = playerOne + " Start";
    //}else{
   //     turn = "O";
   // document.getElementById("playerName").innerHTML = playerTwo + " Starts";
   // }
  }




//When the user clicks a box it'll display a piece on the board depending on which user.
    function clickBox(id){
        //  
        var random = [];
        if(!winner){
            for(var i = 1; i < board.length; i++){
                for(j = 1; j < board.length; j++){
                    if(id == board[i][j]){
                        if(turn == "X" && document.getElementById(board[i][j]).innerHTML == ""){
                             document.getElementById(board[i][j]).innerHTML = "<img src =" + X.src + ">";
                           // document.getElementById("playerName").innerHTML = playerOne + " turn";
                            turn = "O";
                            checkWinner(playerOne);
                            for(var x = 1; x < board.length; x++){
                                for(z = 1; z < board.length; z++){ 
                                    if (document.getElementById(board[x][z]).innerHTML == "") {
                                        random.push(board[x][z]);
                                    }
                            }
                        }
                        clickBox(random[Math.floor(Math.random()*random.length)]);
                            
                        }else if(turn == "O"){
                            document.getElementById(id).innerHTML = "<img src =" + O.src + ">";
                            document.getElementById("playerName").innerHTML = playerOne + " turn";
                            turn = "X";
                            checkWinner(playerTwo);
                        }  
                    }
                }
            }
         }
        }


function checkWinner(name){
    // Iterates through and checks every possible combination of a win  
    for (i = 1; i < board.length; i++)
        {
//Checks rows and compares if the images are the same
            if ((document.getElementById(board[i][1]).innerHTML == document.getElementById(board[i][2]).innerHTML && 
                 document.getElementById(board[i][2]).innerHTML == document.getElementById(board[i][3]).innerHTML) && 
                document.getElementById(board[i][3]).innerHTML != ""){ 
                winner = true;
            
            }
// checks the cols and compares if the images are the same
            else if ((document.getElementById(board[1][i]).innerHTML == document.getElementById(board[2][i]).innerHTML && 
                 document.getElementById(board[2][i]).innerHTML == document.getElementById(board[3][i]).innerHTML) && 
                document.getElementById(board[3][i]).innerHTML != ""){ 
                winner = true;
            
            }
// checks the left diagonal for a win
         else  if ((document.getElementById(board[1][1]).innerHTML == document.getElementById(board[2][2]).innerHTML && 
                 document.getElementById(board[2][2]).innerHTML == document.getElementById(board[3][3]).innerHTML) && 
                document.getElementById(board[3][3]).innerHTML != ""){ 
                winner = true;
            
            }
// checks the right diagonal for a win  
           else if ((document.getElementById(board[1][3]).innerHTML == document.getElementById(board[2][2]).innerHTML && 
                 document.getElementById(board[2][2]).innerHTML == document.getElementById(board[3][1]).innerHTML) && 
                document.getElementById(board[3][1]).innerHTML != ""){ 
                winner = true;
            }
        }
    if(winner){
        document.getElementById("playerName").innerHTML = name + " WON";
     //   winner = false;
    }
}



