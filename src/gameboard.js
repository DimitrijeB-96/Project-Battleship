import Ship from "./ship.js";

export default class Gameboard {
  constructor() {
    this.board = [];
    this.missShotsBoard = [];
    this.createBoard();

    this.placementDirection = 'Horizontal';
  }

  createBoard() {
    for (let i = 0; i < 10; i++) {
      this.board[i] = [];
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = [{ship: false, beenHit: false}];
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
    let shipLength;

    if (ship === 'Carrier') {
      shipLength = 5;
    } else if (ship === 'Battleship') {
      shipLength = 4;
    } else if (ship === 'Destroyer') {
      shipLength = 3
    } else if (ship === 'Submarine') {
      shipLength = 3;
    } else if (ship === 'Patrol Boat') {
      shipLength = 2;
    }

    const isValid = this.isShipPlacementValid(x, y, shipLength, direction);

    if (isValid && direction === 'Horizontal') {
      for (let i = 0; i < shipLength; i++) {
        this.board[y][x + i] = { isHit: false };
      }
    } 

    if (isValid && direction === 'Vertical') {
      for (let i = 0; i < shipLength; i++) {
        this.board[x + i][y] = { isHit: false};
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
    return index.ship === true ? true : false;
  }

  receiveAttack(x, y) {

  }
}