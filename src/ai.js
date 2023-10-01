export default class Ai {
  constructor() {
    this.name = 'Super AI';
    this.turn = false;
  }

  getName() {
    return this.name;
  }

  playRound(playerBoard) {
    let validPlay = false;
    let x;
    let y;

    while (validPlay === false) {
      x = this.getRandomNumber();
      y = this.getRandomNumber();

      if (playerBoard.board[y][x] !== 'miss' && playerBoard.board[y][x] !== 'hit') {
        validPlay = true;
      }
    }

    if (this.turn) {
      playerBoard.receiveAttack(x, y);
      this.changeTurn();
    }
  }

  getRandomNumber() {
    let random = Math.floor(Math.random() * 10);
    return random;
  }

  changeTurn() {
    return this.turn === true ? this.turn = false : this.turn = true;
  }
}