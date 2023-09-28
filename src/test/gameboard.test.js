import Gameboard from "../gameboard.js";

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

test('check if ship can be placed at x = 1, y = 3, ship length 4 direction = "Horizontal", other ship is at placed at x = 1, y = 6, return true', () => {
  const board = new Gameboard();

  board.board[1][6] = { isHit: false };

  expect(board.isShipPlacementValid(1, 3, 4, 'Horizontal')).toBeTruthy();
});

test('check for ship placement at x = 6, y = 2, ship length 4 direction = "Vertical", but ship is placed at x = 1, y = 6, should return false', () => {
  const board = new Gameboard();

  board.board[2][7] = { isHit: false };

  expect(board.placeShip('Battleship', 6, 2, 'Vertical')).toBeFalsy();
});
