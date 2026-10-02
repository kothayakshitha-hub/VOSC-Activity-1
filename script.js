let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let status = document.getElementById("status");
let gameOver = false;

let win = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

function createBoard() {
    let b = document.getElementById("board");

    for (let i = 0; i < 9; i++) {
        let cell = document.createElement("button");
        cell.className = "cell";

        cell.onclick = function() {
            play(i, cell);
        };

        b.appendChild(cell);
    }
}

function play(i, cell) {
    if (board[i] != "" || gameOver) return;

    board[i] = player;
    cell.innerText = player;

    for (let w of win) {
        if (board[w[0]] != "" &&
            board[w[0]] == board[w[1]] &&
            board[w[1]] == board[w[2]]) {

            alert(player + " wins!");
            gameOver = true;
            return;
        }
    }

    if (!board.includes("")) {
        alert("Draw!");
        gameOver = true;
        return;
    }

    player = player == "X" ? "O" : "X";
    status.innerText = "Player " + player + "'s Turn";
}

createBoard();