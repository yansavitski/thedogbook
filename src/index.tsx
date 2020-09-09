import 'normalize.css'
import 'index.scss'

import { App } from 'components/App/App'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
)
