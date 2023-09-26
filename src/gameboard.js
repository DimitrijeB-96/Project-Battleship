export default class Gameboard {
  constructor() {
    this.board = [];

    this.createBoard();
  }

  createBoard() {
    for (let i = 0; i < 10; i++) {
      this.board[i] = [];
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = [];
      }
    }
    return this.board;
  }

  placeShip(x, y, shipLength, orientation) {
    let shipX;
    let shipY;

    if (orientation === 'row') {
      shipX = x + shipLength;
      shipY = y;
    } else if (orientation === 'col') {
      shipX = x;
      shipY = y + shipLength;
    }
    // place no-zone around ships ?
    const isValid = this.isShipPlacementValid(shipX, shipY);

    if (isValid) {
      //place ship
    } else {
      // don't place ship
    }
  }

  isShipPlacementValid(x, y) {
    isValid = false;
    isXValid = false;
    isYValid = false;

    return isValid;
  }

  receiveAttack() {

  }
}