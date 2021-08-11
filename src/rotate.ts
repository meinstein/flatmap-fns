import { FlatMap } from './types'

export type Direction = 'left' | 'right'

export type RotateArgs = { direction?: Direction; steps?: number }

export const rotate = <T>(args?: RotateArgs): FlatMap<T> => {
  let rotatedArray: T[] | null = null

  return (value, currentIndex, array) => {
    if (rotatedArray === null) {
      rotatedArray = [...array]
    }

    const len = array.length
    const end = currentIndex === len - 1
    const steps = args?.steps ?? 1
    const direction: Direction = args?.direction || 'right'

    if (direction === 'left') {
      let newIndex = currentIndex - steps

      if (newIndex < 0) {
        newIndex = Math.abs(newIndex) % len
        newIndex = len - newIndex
      }

      rotatedArray[newIndex] = value
    }

    if (direction === 'right') {
      let newIndex = currentIndex + steps

      if (newIndex >= len) {
        newIndex = newIndex % len
      }

      rotatedArray[newIndex] = value
    }

    return end ? rotatedArray : []
  }
}

export default rotate
