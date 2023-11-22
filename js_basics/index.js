import { intervalID, moveDown } from "./matrix";

const square = document.getElementById('square');
let positionX = 0;
let positionY = 0;
const moveAmount = 10;

function handleKeyPress(event) {
  switch (event.key) {
    case 'ArrowUp':
      moveSquare(0, -moveAmount);
      break;
    case 'ArrowDown':
      moveSquare(0, moveAmount);
      break;
    case 'ArrowLeft':
      moveSquare(-moveAmount, 0);
      break;
    case 'ArrowRight':
      moveSquare(moveAmount, 0);
      break;
    default:
      break;
  }
}

function moveSquare(x, y) {
  positionX += x;
  positionY += y;
  square.style.transform = `translate(${positionX}px, ${positionY}px)`;
}

// Adiciona um ouvinte de evento para teclas de seta
document.addEventListener('keydown', handleKeyPress);intervalID = setInterval(moveDown, 1000);

