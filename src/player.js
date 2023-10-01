export default class Player {
  constructor(playerName) {
    this.name = playerName;
    this.turn = true;
  }

  getName() {
    return this.name;
  }

  playRound(computerBoard, x, y) {
    if (this.turn) {
      computerBoard.receiveAttack(x, y);
      this.changeTurn();
    }
  }

  changeTurn() {
    return this.turn === true ? this.turn = false : this.turn = true;
  }
}