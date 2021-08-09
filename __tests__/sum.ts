import sum from '../src/sum'

test('sum', () => {
  expect([1, 2, 3].flatMap(sum())).toEqual([6])
})
