import { FlatMap } from './types'

export const remove = <T>(...indicesToRemove: number[]): FlatMap<T> => {
  return (value: T, currentIndex: number) => {
    return indicesToRemove.includes(currentIndex) ? [] : [value]
  }
}

export default remove
