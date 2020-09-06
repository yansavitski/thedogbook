import { AppState } from 'store'
import { Breed } from 'store/breeds/types'

import { DogClassifyStatus } from './types'

export const selectDogClassifyBreed = (state: AppState): Breed | null =>
  state.dogClassify.breed ?? null

export const selectDogClassifyStatus = (state: AppState): DogClassifyStatus =>
  state.dogClassify.status
