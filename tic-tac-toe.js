var curr = 'X', count = 0, gameover = false, rowCheck = [0,0,0], colCheck = [0,0,0], diaCheck = [0,0];
var winner = "No one", board = document.getElementById("myTable");
function play(r, c) {
	var update;
	if (gameover == false && board.rows[r].cells[c].innerHTML == ' ') {
			//entering the letter in the board
			board.rows[r].cells[c].innerHTML = curr;
			update = (curr == 'X') ? 100 : 1;
			//updating state
			count++;
			rowCheck[r] += update
			colCheck[c] += update;
			if (r == c)diaCheck[0] += update;
			if (r + c == 2)diaCheck[1] += update;
			//updating next player
			curr == 'X' ? curr = 'O' : curr = 'X';
			document.getElementById('status').innerHTML = curr + " must play";
			//Checking whether the game is finished
		if (count == 9) {
		//if all the moves are done
			gameover = true;
		}
		if (diaCheck[0] == 3 || diaCheck[1] == 3) {
		//if a diagonal is completely filled with O's
			gameover = true;winner = 'O';
		}
		if (diaCheck[0] == 300 || diaCheck[1] == 300) {
		//if a diagonal is completely filled with O's
			gameover = true;winner = 'X';
		}
		for (var i = 0; i < 3; i++) {
			if (rowCheck[i] == 3 || colCheck[i] == 3) {
				//if ith row or ith col is completely filled with O's
				gameover = true;winner = 'O';
			}
			if (rowCheck[i] == 300 || colCheck[i]==300) {
				//if ith row or ith col is completely filled with X's
				gameover = true;winner = 'X';
			}
		}
	}
	if(gameover) {
		//Outputing the final status of the game
		document.getElementById('status').innerHTML = winner + " won the game !!!";
	}
}
