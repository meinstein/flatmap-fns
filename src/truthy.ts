import { FlatMap } from './types'

export const truthy = <T>(): FlatMap<T> => {
  return (value) => {
    return value === undefined || value === null ? [] : [value]
  }
}

export default truthy
