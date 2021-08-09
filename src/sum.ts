import { FlatMap } from './types'

export const sum = (): FlatMap<number> => {
  let accumulator = 0

  return (currentValue, currentIndex, array) => {
    const isLastItem = currentIndex === array.length - 1
    accumulator = accumulator + currentValue
    // return accumulator only on last index
    return isLastItem ? [accumulator] : []
  }
}

export default sum
