// script.js

/*
const matrix = document.getElementById('matrix');
const object = document.createElement('div');
object.classList.add('object');
matrix.appendChild(object);

let position = { x: 5,  y: 1 };
let intervalID;


function updatePosition() {
  object.style.transform = `translate(${position.x * 55}px, ${position.y * 55}px)`;
}

function moveDown(){
    if (position.y < 19){
        position.y++;
        updatePosition();
    } else{
        object.classList.add('fixed');
        clearInterval(intervalID);
    }
}

function checkColision(){
    const fixedObjects = document.querySelectorAll('.fixed');
    for (const fixedObjects of fixedObjects){
        const fixedPosition = {
        x: parseInt(fixedObjects.style.transform.split('(')[1].split('px')[0]) / 55,
        y: parseInt(fixedObjects.style.transform.split('px,')[1].split('px')[0]) / 55
        };
    
        if (fixedPosition.x == position.x && fixedPosition.y == position.y + 1){
        return true;
        }
    }
    return false;
}

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    
    case 'ArrowUp':
      if (position.y > 0) {
        position.y--;
        updatePosition();
      }
      break;
    case 'ArrowDown':
      if (position.y < 4) {
        position.y++;
        updatePosition();
      }
      break;
    
    case 'ArrowLeft':
      if (position.x > 0 && !checkColision()) {
        position.x--;
        updatePosition();
      }
      break;
    case 'ArrowRight':
      if (position.x < 9 && !checkColision()) {
        position.x++;
        updatePosition();
      }
    
      break;
    default:
      break;
  }
});


intervalID = setInterval(moveDown, 500);

// script.js
*/

const gridContainer = document.getElementById('grid-container');

function createGrid(rows, columns) {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.textContent = `${row + 1}, ${col + 1}`; // Adicionando conteúdo para identificar a posição
      gridContainer.appendChild(gridItem);
    }
  }
}

// Criando um grid de 5x4
createGrid(4, 5);
