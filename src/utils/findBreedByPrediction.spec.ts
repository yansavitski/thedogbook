import { findBreedByPrediction } from './findBreedByPrediction'

const breeds = [
  'mustiff',
  'samoyed',
  'hound/blood',
  'puggle',
  'hound',
  'hound/basset',
]

describe('findBreedByPrediction', () => {
  it('should return breed on simple prediction', () => {
    expect.assertions(1)
    const prediction = 'Hound'

    expect(findBreedByPrediction(prediction, breeds)).toStrictEqual('hound')
  })

  it('should return breed on construct prediction', () => {
    expect.assertions(1)
    const prediction = 'Little Basset Hound, Basset Hound'

    expect(findBreedByPrediction(prediction, breeds)).toStrictEqual(
      'hound/basset',
    )
  })

  it('should return null on not existing prediction', () => {
    expect.assertions(1)
    const prediction = 'Little Yellow Pikachu'

    expect(findBreedByPrediction(prediction, breeds)).toBeNull()
  })

  it('should return null on empty parameters', () => {
    expect.assertions(1)
    expect(findBreedByPrediction('', [])).toBeNull()
  })
})
