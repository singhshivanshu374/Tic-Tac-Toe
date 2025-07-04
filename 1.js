let turn = "O";
let total_turn = 0;

// Winning conditions
const winner = [
    [0,1,2], [3,4,5], [6,7,8],  // Rows
    [0,3,6], [1,4,7], [2,5,8],  // Columns
    [0,4,8], [2,4,6]            // Diagonals
];

let tictactoe = new Array(9).fill("E");

// Function to check winner
function checkWinner() {
    for (let [a, b, c] of winner) {
        if (tictactoe[a] !== "E" && tictactoe[a] === tictactoe[b] && tictactoe[b] === tictactoe[c]) {
            return true;
        }
    }
    return false;
}

// Board element
const board = document.querySelector('.board');

// Click event for Tic Tac Toe game
const boardLogic = function(event) {
    let index = event.target.getAttribute("data-index");

    if (!index || tictactoe[index] !== "E") return;

    total_turn++;    

    event.target.innerHTML = turn;
    tictactoe[index] = turn;

    if (checkWinner()) {
        document.getElementById('winningMessage').innerText = `Winner is ${turn}`;
        board.removeEventListener('click', boardLogic);
        return;
    }

    if (total_turn === 9) {
        document.getElementById('winningMessage').innerText = "Match is Draw";
    }   

    turn = turn === "O" ? "X" : "O";
};

// Attach event listener
board.addEventListener('click', boardLogic);

// Restart Button Logic
document.getElementById("restartButton").addEventListener('click', () => {
    turn = "O";
    total_turn = 0;
    tictactoe.fill("E");

    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerHTML = "";
    });

    document.getElementById('winningMessage').innerText = "";
    
    board.removeEventListener('click', boardLogic);
    board.addEventListener('click', boardLogic);
});
