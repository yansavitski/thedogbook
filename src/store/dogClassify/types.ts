import { Breed } from 'store/breeds/types'

export const DOG_CLASSIFYING = 'DOG_CLASSIFYING'
export const DOG_CLASSIFY_FAILED = 'DOG_CLASSIFY_FAILED'
export const DOG_CLASSIFY_SUCCEED = 'DOG_CLASSIFY_SUCCEED'

export enum DogClassifyStatus {
  idle = 'idle',
  classifying = 'classifying',
  succeeded = 'succeeded',
  failed = 'failed',
}

export interface DogClassifyState {
  breed?: Breed | null
  status: DogClassifyStatus
}

export interface SetDogClassifying {
  type: typeof DOG_CLASSIFYING
}

export interface SetDogClassifyFailed {
  type: typeof DOG_CLASSIFY_FAILED
}

export interface SetDogClassifySucceed {
  payload: Breed
  type: typeof DOG_CLASSIFY_SUCCEED
}

export type DogClassifyActionTypes =
  | SetDogClassifying
  | SetDogClassifyFailed
  | SetDogClassifySucceed
