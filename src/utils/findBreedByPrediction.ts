import { Breed } from 'store/breeds/types'

export const findBreedByPrediction = (
  prediction: string,
  breeds: Breed[],
): Breed | null => {
  const predictionGroups = prediction
    .toLowerCase()
    .split(',')
    .reduce((results: string[], predictionGroup: string) => {
      const words = predictionGroup.trim().split(' ')

      results.push(words.join('/'))

      if (words.length > 1) {
        results.push(words.reverse().join('/'))
      }

      return results
    }, [])

  let breedByPrediction: string | null = null

  predictionGroups.some((predictionOption: string) => {
    const findedBreed = breeds.find(
      (breed: Breed) => predictionOption === breed,
    )

    if (findedBreed !== undefined) {
      breedByPrediction = findedBreed
    }

    return Boolean(breedByPrediction)
  })

  return breedByPrediction
}
