import { FlatMap } from './types'

export const keep = <T>(...indicesToKeep: number[]): FlatMap<T> => {
  return (value: T, currentIndex: number) => {
    return indicesToKeep.includes(currentIndex) ? [value] : []
  }
}

export default keep
