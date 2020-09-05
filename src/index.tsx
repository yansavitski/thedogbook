import 'normalize.css'
import 'index.scss'

import { App } from 'components/App/App'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'utils/createStore'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'),
)
