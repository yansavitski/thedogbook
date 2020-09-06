import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { InsertUrlForm } from './InsertUrlForm'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('<InsertUrlForm />', () => {
  it('renders correctly', () => {
    expect.assertions(1)
    const tree = shallow(<InsertUrlForm onSubmit={(): void => {}} />, {
      wrappingComponent: Provider,
      wrappingComponentProps: { store: mockStore() },
    })

    expect(toJson(tree)).toMatchSnapshot()
  })

  it('renders correctly with optional props', () => {
    expect.assertions(1)
    const tree = shallow(
      <InsertUrlForm
        className="customClassWrapper"
        onSubmit={(): void => {}}
        disabled
      />,
    )

    expect(toJson(tree)).toMatchSnapshot()
  })
})
