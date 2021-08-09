import key from '../src/key'

test('key', () => {
  expect([{ id: 'foo' }, { id: 'bar' }].flatMap(key('id'))).toEqual([
    'foo',
    'bar',
  ])
})
