import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { ClassifyImageForm } from './ClassifyImageForm'

describe('<ClassifyImageForm />', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)

  it('renders correctly', () => {
    expect.assertions(1)
    const tree = shallow(
      <Provider store={mockStore({})}>
        <ClassifyImageForm />
      </Provider>,
    ).dive()

    expect(toJson(tree)).toMatchSnapshot()
  })

  it('renders correctly with optional props', () => {
    expect.assertions(1)
    const tree = shallow(
      <Provider store={mockStore({})}>
        <ClassifyImageForm className="customClassWrapper" disabled />
      </Provider>,
    ).dive()

    expect(toJson(tree)).toMatchSnapshot()
  })
})
