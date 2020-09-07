import { LoadableState } from 'store/types'

export const DOGS_LOADING = 'DOGS_LOADING'
export const DOGS_LOADED = 'DOGS_LOADED'
export const DOGS_FAILED = 'DOGS_FAILED'

export interface DogsResponseApi {
  message: string[]
  status: string
}

export interface DogsState extends LoadableState<{ [key: string]: Dog }> {
  hasMore: boolean
  ids: string[]
}

export interface Dog {
  breed?: string
  id: string
  url: string
}

export interface SetDogLoadedAction {
  payload: Dog[]
  type: typeof DOGS_LOADED
}

export interface SetDogLoadingAction {
  type: typeof DOGS_LOADING
}

export interface SetDogFailedAction {
  error: string
  type: typeof DOGS_FAILED
}

export type DogsActionTypes =
  | SetDogLoadedAction
  | SetDogLoadingAction
  | SetDogFailedAction
