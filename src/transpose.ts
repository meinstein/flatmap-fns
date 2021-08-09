import { FlatMap } from './types'

export const transpose = <T>(indexA: number, indexB: number): FlatMap<T> => {
  return (value, index, array) => {
    if (index === indexA) return [array[indexB]]
    if (index === indexB) return [array[indexA]]
    return [value]
  }
}

export default transpose
