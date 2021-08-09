import { FlatMapObjectList } from './types'

export const key = <T>(key: keyof T): FlatMapObjectList<T> => {
  return (dict) => {
    return dict[key]
  }
}

export default key
