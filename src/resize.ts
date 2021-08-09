import { FlatMap } from './types'

export const resize = <T>(length: number): FlatMap<T> => {
  return (value, index, array) => {
    // CASE: array is being shortened
    if (index > length - 1) {
      return []
    }

    // CASE: array is being lengthened
    if (index === array.length - 1 && index < length - 1) {
      return [value, ...new Array(length - index - 1)]
    }

    return [value]
  }
}

export default resize
