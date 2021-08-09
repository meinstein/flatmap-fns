import truthy from '../src/truthy'

test('insert', () => {
  expect(['foo', undefined, 'baz', null].flatMap(truthy())).toEqual([
    'foo',
    'baz',
  ])
})
