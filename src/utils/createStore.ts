import {
  Action,
  applyMiddleware,
  createStore as createReduxStore,
  Store,
} from 'redux'
import { composeWithDevTools as composeWithDevelopmentTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { AppState, rootReducer } from 'store'

export const createStore = (state?: AppState): Store<AppState, Action> => {
  const enhancer = composeWithDevelopmentTools(applyMiddleware(thunk))

  return createReduxStore<AppState, Action, object, object>(
    rootReducer,
    state,
    enhancer,
  )
}
