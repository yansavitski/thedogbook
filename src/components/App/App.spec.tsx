import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { App } from './App'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('<App />', () => {
  it('renders correctly', () => {
    expect.assertions(1)
    const tree = shallow(
      <Provider store={mockStore()}>
        <App />
      </Provider>,
    ).dive()

    expect(toJson(tree)).toMatchSnapshot()
  })
})
