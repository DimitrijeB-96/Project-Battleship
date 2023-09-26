export default class Ship {
  constructor(shipLength) {
    this.length = shipLength;
    this.ship = this.createShip();
  }

  createShip() {
    let ship = [];

    for (let i = 0; i < this.length; i++) {
      ship.push({ isHit: false })
    }

    return ship;
  }

  hit(index) {
    return this.ship[index].isHit = true;
  }

  isSunk() {
    return this.ship.every(this.isEachShipIndexHit);
  }

  isEachShipIndexHit(index) {
    return index.isHit == true ? true : false;
  }
}
