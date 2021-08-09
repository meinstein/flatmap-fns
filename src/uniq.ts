import { FlatMap } from './types'

export const uniq = <T>(): FlatMap<T> => {
  const set = new Set()
  return (value: T) => {
    if (set.has(value)) return []
    set.add(value)
    return [value]
  }
}

export default uniq
