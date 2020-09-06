import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { PreviewImage } from './PreviewImage'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('<PreviewImage />', () => {
  it('renders correctly', () => {
    expect.assertions(1)
    const tree = shallow(
      <Provider store={mockStore()}>
        <PreviewImage onLoad={(): void => {}} url="https://img" />
      </Provider>,
    ).dive()

    expect(toJson(tree)).toMatchSnapshot()
  })

  it('renders correctly with optional props', () => {
    expect.assertions(1)
    const tree = shallow(
      <Provider store={mockStore()}>
        <PreviewImage
          className="preview"
          onLoad={(): void => {}}
          url="https://img"
        />
      </Provider>,
    ).dive()

    expect(toJson(tree)).toMatchSnapshot()
  })
})
