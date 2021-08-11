import { FlatMap } from './types'

export const shuffle = <T>(): FlatMap<T> => {
  let shuffledArray: T[] | null = null

  return (_, currentIndex, array) => {
    // Store array in outer scope on first iteration.
    if (shuffledArray === null) shuffledArray = [...array]

    const len = array.length
    const isEnd = currentIndex === len - 1
    const newIndex = Math.floor(Math.random() * len)

    // Swap
    const tmp = shuffledArray[newIndex]
    shuffledArray[newIndex] = shuffledArray[currentIndex]
    shuffledArray[currentIndex] = tmp

    // Only return shuffled array on last index
    return isEnd ? shuffledArray : []
  }
}

export default shuffle
