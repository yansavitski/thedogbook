import { LoadableState } from 'store/types'

export const BREEDS_LOADING = 'BREEDS_LOADING'
export const BREEDS_LOADED = 'BREEDS_LOADED'
export const BREEDS_FAILED = 'BREEDS_FAILED'

export interface BreedsResponseApi {
  message: { [key: string]: string[] }
  status: string
}

export type Breed = string

export type BreedsState = LoadableState<Breed[]>

export interface SetBreedsLoadingAction {
  type: typeof BREEDS_LOADING
}

export interface SetBreedsLoadedAction {
  payload: Breed[]
  type: typeof BREEDS_LOADED
}

export interface SetBreedsFailedAction {
  error: string
  type: typeof BREEDS_FAILED
}

export type BreedsActionTypes =
  | SetBreedsLoadingAction
  | SetBreedsLoadedAction
  | SetBreedsFailedAction
