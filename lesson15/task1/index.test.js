import { makeCounter } from './index';

it ('res1', () => {
  const result = makeCounter();
  expect(result).toEqual(1);
});

