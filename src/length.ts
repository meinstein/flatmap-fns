type FlatMap<T> = (value: T, index: number, array: T[]) => number[]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type HasLengthProperty = any[] | string

export const length = (): FlatMap<HasLengthProperty> => {
  return (value) => {
    return [value.length]
  }
}

export default length
