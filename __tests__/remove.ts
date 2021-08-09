import remove from '../src/remove'

test('remove - one index', () => {
  expect(['foo', 'bar', 'baz'].flatMap(remove(1))).toEqual(['foo', 'baz'])
})

test('remove - more than one index', () => {
  expect(['foo', 'bar', 'baz'].flatMap(remove(1, 2))).toEqual(['foo'])
})
