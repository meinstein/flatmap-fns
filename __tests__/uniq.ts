import uniq from '../src/uniq'

test('uniq', () => {
  expect(['foo', 'foo', 'baz', 1, 1].flatMap(uniq())).toEqual(['foo', 'baz', 1])
})
