import { combineReducers } from 'redux'

import { breedsReducer } from './breeds/reducers'
import { dogClassifyReducer } from './dogClassify/reducers'

export const rootReducer = combineReducers({
  breeds: breedsReducer,
  dogClassify: dogClassifyReducer,
})

export type AppState = ReturnType<typeof rootReducer>
