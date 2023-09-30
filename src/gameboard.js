import Ship from "./ship.js";

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
        this.board[i][j] = null;
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

  placeShip(ship, x, y, direction) {
    let shipLength = ship.length;

    const isValid = this.isShipPlacementValid(x, y, shipLength, direction);

    if (isValid && direction === 'Horizontal') {
      for (let i = 0; i < shipLength; i++) {
        this.board[y][x + i] = ship;
      }
    } 

    if (isValid && direction === 'Vertical') {
      for (let i = 0; i < shipLength; i++) {
        this.board[y + i][x] = ship;
      }
    }
  }

  isShipPlacementValid(x, y, shipLength, direction) {
    let slicedArray = [];
    let isValid = false;

    if (direction === 'Horizontal') {
      slicedArray = this.board[y];
      slicedArray = slicedArray.slice(x);
    } else if (direction === 'Vertical') {
      slicedArray = this.board.map((arr) => arr[x]);
      slicedArray = slicedArray.slice(y);
    }

    if (slicedArray.length >= shipLength) {
      slicedArray = slicedArray.slice(0, shipLength);
    } else {
      return isValid = false;
    }

    const isShipFound = slicedArray.some(this.shipFound);

    if (isShipFound === true) {
      isValid = false;
    } else {
      isValid = true;
    }

    return isValid;
  }

  shipFound(index) {
    return index === null ? false : true;
  }

  receiveAttack(x, y) {
    const checkForShip = this.board[y][x];

    if (checkForShip === null) {
      this.board[y][x] = 'miss';
    } else if (checkForShip === 'miss' || checkForShip === 'hit') {
      return;
    } else {
      checkForShip.hit();
      this.board[y][x] = 'hit';
    }

    return this.board[y][x];
  }

  areAllShipsSunk() {
    let shipNotSunk = 0;

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board.length; j++)  {
        if (this.board[i][j] !== 'hit' &&
            this.board[i][j] !== 'miss' &&
            this.board[i][j] !== null) {
              shipNotSunk += 1;
        }
      }
    }

    return shipNotSunk === 0 ? true : false;
  }
}