import { FlatMap } from './types'

export type Direction = 'left' | 'right'

export type RotateArgs = { direction?: Direction; steps?: number }

export const rotate = <T>(args?: RotateArgs): FlatMap<T> => {
  let rotatedArray: T[] | null = null

  return (value, currentIndex, array) => {
    if (rotatedArray === null) {
      rotatedArray = [...array]
    }

    const isEnd = currentIndex === array.length - 1

    const steps = args?.steps ?? 1
    const direction: Direction = args?.direction || 'right'

    if (direction === 'left') {
      let newIndex = currentIndex - steps
      if (newIndex < 0) {
        newIndex = Math.abs(newIndex) % array.length
        newIndex = array.length - newIndex
      }

      rotatedArray[newIndex] = value
    }

    if (direction === 'right') {
      let newIndex = currentIndex + steps
      if (newIndex >= array.length) {
        newIndex = newIndex % array.length
      }

      rotatedArray[newIndex] = value
    }

    return isEnd ? rotatedArray : []
  }
}

export default rotate
