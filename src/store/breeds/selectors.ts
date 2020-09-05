import { AppState } from 'store'
import { ReducersState } from 'store/types'

export const selectBreedsStatus = (state: AppState): ReducersState =>
  state.breeds.status
