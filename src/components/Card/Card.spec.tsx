import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'

import { Card } from './Card'

describe('<Card />', () => {
  it('renders correctly', () => {
    expect.assertions(1)
    const tree = shallow(<Card url="url to card" />)

    expect(toJson(tree)).toMatchSnapshot()
  })
})
