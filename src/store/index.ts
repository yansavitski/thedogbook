import { combineReducers } from 'redux'

import { breedsReducer } from './breeds/reducers'
import { dogClassifyReducer } from './dogClassify/reducers'
import { dogsReducer } from './dogs/reducers'

export const rootReducer = combineReducers({
  breeds: breedsReducer,
  dogClassify: dogClassifyReducer,
  dogs: dogsReducer,
})

export type AppState = ReturnType<typeof rootReducer>
