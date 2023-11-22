// tetris.js

const gameContainer = document.getElementById('game-container');
const blockSize = 30;
const rows = 20;
const columns = 10;
let board = createEmptyBoard();

function createEmptyBoard() {
  return Array.from({ length: rows }, () => Array(columns).fill(0));
}

function drawBoard() {
  gameContainer.innerHTML = '';

  board.forEach(row => {
    row.forEach(cell => {
      const block = document.createElement('div');
      block.classList.add('block', cell ? 'occupied' : 'empty');
      gameContainer.appendChild(block);
    });
  });
}

function drawPiece(piece, offset) {
  piece.shape.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell) {
        const block = document.createElement('div');
        block.classList.add('block', 'occupied');
        block.style.top = `${(offset.y + i) * blockSize}px`;
        block.style.left = `${(offset.x + j) * blockSize}px`;
        gameContainer.appendChild(block);
      }
    });
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown') {
    moveDown();
  } else if (event.key === 'ArrowLeft') {
    // Implement logic to move the current piece left
  } else if (event.key === 'ArrowRight') {
    // Implement logic to move the current piece right
  } else if (event.key === 'ArrowUp') {
    rotate();
  }
});


let currentPiece;
let currentPosition;

function startGame() {
  currentPiece = getRandomPiece();
  currentPosition = { x: 0, y: 0 };
  drawBoard();
  drawPiece(currentPiece, currentPosition);
  setInterval(() => moveDown(), 1000); // Move a peça para baixo a cada segundo
}

function getRandomPiece() {
  const pieces = [
    [[1, 1, 1, 1]],
    [[1, 1], [1, 1]],
    [[1, 1, 1], [1, 0, 0]],
    [[1, 1, 1], [0, 0, 1]],
    [[1, 1, 1], [0, 1, 0]],
  ];
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return { shape: pieces[randomIndex] };
}

function moveDown() {
  if (!checkCollision(0, 1)) {
    currentPosition.y++;
    drawBoard();
    drawPiece(currentPiece, currentPosition);
  } else {
    // Se houver uma colisão, fixa a peça no tabuleiro e obtém uma nova peça
    mergePiece();
    currentPiece = getRandomPiece();
    currentPosition = { x: 0, y: 0 };
  }
}

function checkCollision(offsetX, offsetY) {
  const piece = currentPiece.shape;
  const x = currentPosition.x + offsetX;
  const y = currentPosition.y + offsetY;

  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[i].length; j++) {
      if (
        piece[i][j] &&
        (board[y + i] && board[y + i][x + j]) !== 0
      ) {
        return true; // Colisão detectada
      }
    }
  }

  return false;
}

function mergePiece() {
  const piece = currentPiece.shape;
  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[i].length; j++) {
      if (piece[i][j]) {
        board[currentPosition.y + i][currentPosition.x + j] = 1;
      }
    }
  }

  // Verifica se há linhas completas e as limpa
  clearLines();

  drawBoard();
}

function clearLines() {
  for (let i = rows - 1; i >= 0; i--) {
    if (board[i].every(cell => cell !== 0)) {
      // Remove a linha completa
      board.splice(i, 1);
      // Adiciona uma nova linha vazia no topo
      board.unshift(Array(columns).fill(0));
    }
  }
}


// Call the startGame function to begin
startGame();

