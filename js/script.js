const gridContainer = document.querySelector('.grid-container');
const startButton = document.querySelector('.start-button');

// Aggiungo un event listener al bottone di avvio:
startButton.addEventListener('click', () => {
  // Rimuovo eventuali celle esistenti
  gridContainer.innerHTML = '';

  // Genero le celle della griglia:
  for (let i = 1; i <= 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    cell.textContent = i;
    gridContainer.appendChild(cell);

    // Aggiungo un event listener a ciascuna cella:
    cell.addEventListener('click', () => {
      cell.style.backgroundColor = '#7392B7';
      alert(`Cell ${i} clicked`);
    });
  }
});