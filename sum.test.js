const sum = require('./sum');

test('soma 2 + 2 = 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('soma números negativos', () => {
  expect(sum(-1, -3)).toBe(-4);
});