import { FlatMap } from './types'

export const sum = (): FlatMap<number> => {
  let accumulator = 0

  return (currentValue, currentIndex, array) => {
    const isEnd = currentIndex === array.length - 1
    accumulator = accumulator + currentValue
    // return accumulator only on last index
    return isEnd ? [accumulator] : []
  }
}

export default sum
