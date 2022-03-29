import { calc } from './calculator';

it('+', () => {
  const result = calc('1 + 2');
  expect(result).toEqual('1 + 2 = 3');
});

it('-', () => {
  const result = calc('3 - 2');
  expect(result).toEqual('3 - 2 = 1');
});

it('*', () => {
  const result = calc('2 * 2');
  expect(result).toEqual('2 * 2 = 4');
});

it('/', () => {
  const result = calc('4 / 2');
  expect(result).toEqual('4 / 2 = 2');
});

it('string', () => {
  const result = calc(252);
  expect(result).toEqual(null);
});
