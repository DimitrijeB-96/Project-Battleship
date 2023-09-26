import Ship from '../ship.js';

test('check if test is created properly', () => {
  const ship = new Ship(4);

  expect(ship).toEqual({
    length: 4,
    ship: [
      { isHit: false },
      { isHit: false },
      { isHit: false },
      { isHit: false }
    ]
  });
});

test('check if ship has been sunked', () => {
  const ship = new Ship(2);
  ship.hit(0);
  ship.hit(1);
  
  expect(ship.isSunk()).toBeTruthy();
});