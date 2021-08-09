import resize from '../src/resize'

test('resize - lengthen array', () => {
  expect([1].flatMap(resize(3))).toEqual([1, undefined, undefined])
})

test('resize - shorten array', () => {
  expect([1, 2, 3, 4, 5].flatMap(resize(3))).toEqual([1, 2, 3])
})
