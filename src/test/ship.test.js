import Ship from '../ship.js';

test('check if test is created properly', () => {
  const ship = new Ship(4);

  expect(ship).toEqual({ length: 4, hits: 0 });
});

test('check if ship has been sunked', () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  
  expect(ship.isSunk()).toBeTruthy();
});

test('check if ship is not sunked', () => {
  const ship = new Ship(4);
  ship.hit();
  ship.hit();
  ship.hit();
  
  expect(ship.isSunk()).toBeFalsy();
});