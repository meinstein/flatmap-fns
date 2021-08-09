import { FlatMap } from './types'

export const replace = <T>(index: number, value: T): FlatMap<T> => {
  return (_value, _index) => {
    return _index === index ? [value] : [_value]
  }
}

export default replace
