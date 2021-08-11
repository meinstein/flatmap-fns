import rotate from '../src/rotate'

test('rotate - default - rotate right - 1 round', () => {
  expect(
    [1, 2, 3, 4, 5].flatMap(rotate({ direction: 'right', steps: 1 })),
  ).toEqual([5, 1, 2, 3, 4])
})

test('rotate - rotate right - 0 steps', () => {
  expect(
    [1, 2, 3, 4, 5].flatMap(rotate({ direction: 'right', steps: 0 })),
  ).toEqual([1, 2, 3, 4, 5])
})

test('rotate - rotate right - steps same len as input array', () => {
  expect(
    [1, 2, 3, 4, 5].flatMap(rotate({ direction: 'right', steps: 5 })),
  ).toEqual([1, 2, 3, 4, 5])
})

test('rotate - rotate right - 2 steps', () => {
  expect(
    [1, 2, 3, 4, 5].flatMap(rotate({ direction: 'right', steps: 2 })),
  ).toEqual([4, 5, 1, 2, 3])
})

test('rotate - rotate left - 0 steps', () => {
  expect(
    [1, 2, 3, 4, 5].flatMap(rotate({ direction: 'left', steps: 0 })),
  ).toEqual([1, 2, 3, 4, 5])
})

test('rotate - rotate left - 1 round', () => {
  expect([1, 2, 3, 4, 5].flatMap(rotate({ direction: 'left' }))).toEqual([
    2, 3, 4, 5, 1,
  ])
})

test('rotate - rotate left - 2 steps', () => {
  expect(
    [1, 2, 3, 4, 5].flatMap(rotate({ direction: 'left', steps: 2 })),
  ).toEqual([3, 4, 5, 1, 2])
})
