export default class Ship {
  constructor(shipLength) {
    this.length = shipLength;
    this.hits = 0;
  }

  hit() {
    return this.hits += 1;
  }

  isSunk() {
    if (this.hits >= this.length) {
      return true;
    } else {
      return false;
    }
  }
}
