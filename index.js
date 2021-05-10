const winnerCombinations = {
  '1': {
    '2': 3,
    '4': 7,
    '5': 9,
  },
  '2': {
    '1': 3,
    '5': 8,
  },
  '3': {
    '1': 2,
    '6': 9,
    '5': 7,
  },
  '4': {
    '1': 7,
    '5': 6,
  },
  '5': {
    '1': 9,
    '2': 8,
    '3': 7,
    '4': 6,
  },
  '6':{
    '3': 9,
    '4': 5,
  },
  '7':{
    '3': 5,
    '1': 4,
    '8': 9
  },
  '8': {
    '7': 9,
    '2': 5,
  },
  '9':{
    7: 8,
    1: 5,
    3: 6,
  }
}

class TicTacToe{
  constructor(elementId){
    this.player = 1;
    this.elementId = elementId;
    this.setup();
  }

  setup(){
    const el = document.getElementById(this.elementId);
    el.innerHTML = this.getTemplate();

  }

  getTemplate(){
    return `
    <div class="row">
      <div data-tilt data-tilt-glare data-tilt-scale="1.2" onclick="game.onClick('casilla-1')" class="casilla" id="casilla-1"></div>
      <div data-tilt data-tilt-glare data-tilt-scale="1.2" onclick="game.onClick('casilla-2')" class="casilla" id="casilla-2"></div>
      <div data-tilt data-tilt-glare data-tilt-scale="1.2" onclick="game.onClick('casilla-3')" class="casilla" id="casilla-3"></div>
    </div>
    <div class="row">
      <div data-tilt data-tilt-glare data-tilt-scale="1.2" onclick="game.onClick('casilla-4')" class="casilla" id="casilla-4"></div>
      <div data-tilt data-tilt-glare data-tilt-scale="1.2" onclick="game.onClick('casilla-5')" class="casilla" id="casilla-5"></div>
      <div data-tilt data-tilt-glare data-tilt-scale="1.2" onclick="game.onClick('casilla-6')" class="casilla" id="casilla-6"></div>
    </div>
    <div class="row">
      <div data-tilt data-tilt-glare data-tilt-scale="1.2" onclick="game.onClick('casilla-7')" class="casilla" id="casilla-7"></div>
      <div data-tilt data-tilt-glare data-tilt-scale="1.2" onclick="game.onClick('casilla-8')" class="casilla" id="casilla-8"></div>
      <div data-tilt data-tilt-glare data-tilt-scale="1.2" onclick="game.onClick('casilla-9')" class="casilla" id="casilla-9"></div>
    </div>`
  }

  onClick(id){
    const casilla = document.getElementById(id);

    if (casilla.classList.contains('jugador')){
      console.log('CLICK INVALIDO')
      return;
    }

    this.checkWinner(id, this.player);
    casilla.classList.add(`jugador`);
    casilla.classList.add(`jugador-${this.player}`);
    


    if (this.player === 1){
      this.player = 2;
    } else {
      this.player = 1;
    }
  }

  checkWinner(id, player){
    const numeroCasilla = id.replace('casilla-','');
    const combination =  winnerCombinations[numeroCasilla];

    for (const numeroCasilla2 in combination){
      console.log('ejecutando el ciclo', numeroCasilla2)
      const numeroCasilla3 = combination[numeroCasilla2];
      const casilla2 = document.getElementById(`casilla-${numeroCasilla2}`);
      
      if (casilla2.classList.contains(`jugador-${player}`)){
        console.log('CASILLA 2 OK', numeroCasilla2)
        console.log('CASILLA 3 OK', numeroCasilla3)
        const casilla3 = document.getElementById(`casilla-${numeroCasilla3}`)
        if (casilla3.classList.contains(`jugador-${player}`)){
          console.log('CASILLA 3')
          alert(`GANASTAAA jugador ${player}`)
        }
      }
    } 
  }
}


const game = new TicTacToe('tic-tac-toe');