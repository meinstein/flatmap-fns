import length from '../src/length'

test('length', () => {
  expect([[1, 2], 'foo'].flatMap(length())).toEqual([2, 3])
})
