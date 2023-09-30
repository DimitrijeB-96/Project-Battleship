import Gameboard from "../gameboard.js";
import Ship from "../ship.js";

// X and Y axes are switch in arrays, example array[Y][X]...

test('get ship placement on to the board', () => {
  const board = new Gameboard();

  expect(board.getShipPlacementDirection()).toBe('Horizontal');
});

test('change ship placement on to the board', () => {
  const board = new Gameboard();
  board.changeShipPlacementDirection();

  expect(board.getShipPlacementDirection()).toBe('Vertical');
});

test('check for ship placement at x = 1, y = 3, ship length 4 direction = "Horizontal", should return true', () => {
  const board = new Gameboard();

  expect(board.isShipPlacementValid(1, 3, 4, 'Horizontal')).toBeTruthy();
});

test('check if ship can be placed at x = 1, y = 3, ship length 4 direction = "Vertical", should return true', () => {
  const board = new Gameboard();

  expect(board.isShipPlacementValid(1, 3, 4, 'Vertical')).toBeTruthy();
});

test('check for ship placement at x = 6, y = 2, ship length 4 direction = "Horizontal", other ship is placed at x = 1, y = 8, ship length 3 direction = "Vertical", should return false', () => {
  const board = new Gameboard();

  const battleship = new Ship(4);
  const submarine = new Ship(3);
  board.placeShip(submarine, 1, 8, 'Vertical');

  expect(board.placeShip(battleship, 6, 2, 'Horizontal')).toBeFalsy();
});

test('check when ship is "hit"', () => {
  const board = new Gameboard();

  const carrier = new Ship(5);
  board.placeShip(carrier, 4, 5, 'Horizontal');

  expect(board.receiveAttack(5, 5)).toBe('hit');
});

test('check when ship is "miss"', () => {
  const board = new Gameboard();

  const patrolBoat = new Ship(2);
  board.placeShip(patrolBoat, 5, 5, 'Horizontal');

  expect(board.receiveAttack(4, 5)).toBe('miss');
});

test('check if all ships are sunk, should return true', () => {
  const board = new Gameboard();

  const patrolBoat1 = new Ship(2);
  const patrolBoat2 = new Ship(2);

  board.placeShip(patrolBoat1, 6, 7, 'Horizontal');
  board.placeShip(patrolBoat2, 1, 2, 'Vertical');

  board.receiveAttack(6, 7);
  board.receiveAttack(7, 7);
  board.receiveAttack(1, 2);
  board.receiveAttack(1, 3);

  expect(board.areAllShipsSunk()).toBeTruthy();
});

test('check if all ships are sunk, should return false', () => {
  const board = new Gameboard();

  const carrier = new Ship(5);
  const submarine = new Ship(3);

  board.placeShip(carrier, 3, 5, 'Vertical');
  board.placeShip(submarine, 7, 0, 'Horizontal');

  board.receiveAttack(8, 0);
  board.receiveAttack(9, 0);
  board.receiveAttack(3, 9);
  board.receiveAttack(4, 9);

  expect(board.areAllShipsSunk()).toBeFalsy();
});


