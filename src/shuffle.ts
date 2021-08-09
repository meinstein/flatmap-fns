import { FlatMap } from './types'

export const shuffle = <T>(): FlatMap<T> => {
  let shuffledArray: T[] | null = null

  return (currentValue, currentIndex, array) => {
    const isLastItem = currentIndex === array.length - 1
    // Store array in outer scope on first iteration.
    if (shuffledArray === null) shuffledArray = array
    const newIndex = Math.floor(Math.random() * array.length)
    const tmp = array[newIndex]
    array[newIndex] = currentValue
    array[currentIndex] = tmp

    // Only return shuffled array on last index
    return isLastItem ? shuffledArray : []
  }
}

export default shuffle
