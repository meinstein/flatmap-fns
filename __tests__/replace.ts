import replace from '../src/replace'

test('replace', () => {
  expect(['foo', 'bar', 'baz'].flatMap(replace(1, 'foo'))).toEqual([
    'foo',
    'foo',
    'baz',
  ])
})
