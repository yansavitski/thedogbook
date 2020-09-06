import './App.scss'

import { ClassifyImageForm } from 'components/ClassifyImageForm/ClassifyImageForm'
import React from 'react'
import { compose } from 'redux'
import { withLoadBreeds } from 'utils/HOCs/withLoadBreeds/withLoadBreeds'

export const App = compose<React.FunctionComponent>(withLoadBreeds)(() => (
  <main className="App">
    <h1 className="App-title">Dogbook</h1>

    <ClassifyImageForm className="App-upload" />
  </main>
))
