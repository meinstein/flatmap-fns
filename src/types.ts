export type FlatMap<T> = (value: T, index: number, array: T[]) => T[]

export type FlatMapObjectList<T> = (
  value: T,
  index: number,
  array: T[],
) => T[keyof T]
