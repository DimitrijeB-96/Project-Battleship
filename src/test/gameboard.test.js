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

test('check for ship placement at x = 1, y = 3, ship length 4 direction = "Horizontal", should return true', () => {
  const board = new Gameboard();

  expect(board.isShipPlacementValid(1, 3, 4, 'Horizontal')).toBeTruthy();
});

test('check for ship placement at x = 1, y = 3, ship length 4 direction = "Horizontal", but ship is placed at x = 1, y = 6, should return false', () => {
  const board = new Gameboard();

  board.board[1][6] = { ship: true };

  expect(board.isShipPlacementValid(1, 3, 4, 'Horizontal')).toBeFalsy();
});

test('check for ship placement at x = 7, y = 2, ship length 4 direction = "Vertical", but ship is placed at x = 1, y = 6, should return false', () => {
  const board = new Gameboard();

  board.board[3][7] = { ship: true };

  expect(board.isShipPlacementValid(7, 2, 4, 'Vertical')).toBeFalsy();
});