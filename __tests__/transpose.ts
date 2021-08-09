import transpose from '../src/transpose'

test('transpose', () => {
  expect(['foo', 'bar', 'baz'].flatMap(transpose(1, 2))).toEqual([
    'foo',
    'baz',
    'bar',
  ])
})
