import { FlatMap } from './types'

export const insert = <T>(value: T, index: number): FlatMap<T> => {
  return (currValue, currIndex, array) => {
    // Scenario: insert before
    if (index === currIndex) {
      return [value, currValue]
    }

    // Scenario: appending
    if (index === array.length && currIndex === array.length - 1) {
      return [currValue, value]
    }

    return [currValue]
  }
}

export default insert
