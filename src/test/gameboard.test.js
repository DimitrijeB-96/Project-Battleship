import Gameboard from "../gameboard.js";

test('get ship placement on to the board', () => {
  const board = new Gameboard();

  expect(board.getShipPlacementDirection()).toBe('Horizontal');
});

test('change ship placement on to the board', () => {
  const board = new Gameboard();
  board.changeShipPlacementDirection();

  expect(board.getShipPlacementDirection()).toBe('Vertical');
});

test('test isShipFound method for empty array', () => {
  const board = new Gameboard();

  expect(board.shipFound([])).toBeFalsy();
});

test('test isShipFound method for true and false', () => {
  const board = new Gameboard();

  expect(board.shipFound([1])).toBeTruthy();
});

test('isShipPlacementValid for 1 5 4 "Horizontal"', () => {
  const board = new Gameboard();

  expect(board.isShipPlacementValid(1, 3, 4, 'Horizontal')).toBeTruthy();
});

test('isShipPlacementValid for 1 5 4 "Horizontal", where ship is placed at 1 6', () => {
  const board = new Gameboard();

  board.board[1][6] = { isHit: false };

  expect(board.isShipPlacementValid(1, 3, 4, 'Horizontal')).toBeFalsy();
});