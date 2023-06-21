function generateBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
  
    for (let row = 1; row <= 10; row++) {
      // Creazione di un elemento div per rappresentare una riga
      const rowElem = document.createElement('div');
      rowElem.className = 'row';
  
      for (let col = 1; col <= 10; col++) {
        // Creazione di un elemento div per rappresentare una cella
        const cell = document.createElement('div');
        cell.className = 'col-1 cell';
        
        // Assegnazione del testo alla cella corrente basato sulla posizione nella griglia
        cell.innerText = (row - 1) * 10 + col;
  
        // Aggiunta dell'evento di click alla cella
        cell.addEventListener('click', handleClick);
  
        // Aggiunta della cella alla riga corrente
        rowElem.appendChild(cell);
        }
  
      // Aggiunta della riga al contenitore della griglia
      board.appendChild(rowElem);
    }
}
  
  function handleClick(event) {
    const cell = event.target;
    
    // Aggiunta della classe 'clicked' alla cella cliccata
    cell.classList.add('clicked');
    
    // Stampa del testo della cella cliccata nella console
    console.log('Cella cliccata:', cell.innerText);
}
  
