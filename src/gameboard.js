export default class Gameboard {
  constructor() {
    this.board = [];
    this.createBoard();

    this.placementDirection = 'Horizontal';
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

  getShipPlacementDirection() {
    return this.placementDirection;
  }

  changeShipPlacementDirection() {
    return this.placementDirection === 'Horizontal' ? this.placementDirection = 'Vertical' : this.placementDirection = 'Horizontal';
  }

  placeShip(x, y, shipLength, direction) {
    const isValid = this.isShipPlacementValid(x, y, shipLength, direction);
  }

  isShipPlacementValid(x, y, shipLength, direction) {
    let slicedArray = [];
    let isValid = false;

    if (direction === 'Horizontal') {
      slicedArray = this.board[x];
    } else if (direction === 'Vertical') {
      slicedArray = this.board.map((arr) => arr[x]);
    }

    slicedArray = slicedArray.slice(y);

    if (slicedArray.length >= shipLength) {
      slicedArray = slicedArray.slice(0, shipLength);
    } 
    // Not sure yet how to deal with ELSE

    const isShipFound = slicedArray.some(this.shipFound);

    if (isShipFound) {
      isValid = false;
    } else {
      isValid = true;
    }

    return isValid;
  }

  shipFound(index) {
    return index != 0 ? true : false;
  }

  receiveAttack() {

  }
}