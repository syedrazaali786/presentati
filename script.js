const cells = document.querySelectorAll('.cell');
const restartBtn = document.getElementById('restart-btn');

let currentPlayer = 'X';
let gameEnded = false;

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.textContent && !gameEnded) {
            cell.textContent = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

restartBtn.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
    gameEnded = false;
});

function checkWinner() {
    const patterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
    ];

    for (let pattern of patterns) {
        const [a, b, c] = pattern;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            cells[a].style.backgroundColor = 'maroon';
            cells[b].style.backgroundColor = 'maroon';
            cells[c].style.backgroundColor = 'maroon';
            gameEnded = true;
            return;
        }
    }
}