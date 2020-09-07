import { createSelector } from 'reselect'
import { AppState } from 'store'
import { selectDogClassifyBreed } from 'store/dogClassify/selectors'
import { ReducersState } from 'store/types'

import { Dog } from './types'

export const selectDogs = (state: AppState): Dog[] =>
  state.dogs.ids.map((id: string) => state.dogs.data[id])
export const selectDogsStatus = (state: AppState): ReducersState =>
  state.dogs.status
export const selectDogsHasMore = (state: AppState): boolean =>
  state.dogs.hasMore

export const selectDogsByBreed = createSelector(
  selectDogs,
  selectDogClassifyBreed,
  (dogs: Dog[], breedName: string | null) =>
    dogs.filter((dog: Dog) => dog.breed === breedName),
)
