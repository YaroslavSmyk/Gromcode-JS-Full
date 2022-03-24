import { getMinSquaredNumber } from './getMinSquaredNumber';

it('arr empty', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('arr string', () => {
  const result = getMinSquaredNumber('dfv');
  expect(result).toEqual(null);
});

it('min arr * arr', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});
