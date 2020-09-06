import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'

import { Loading } from './Loading'

describe('<Loading />', () => {
  it('renders correctly', () => {
    expect.assertions(1)
    const tree = shallow(<Loading className="customLoader" size={32} />)

    expect(toJson(tree)).toMatchSnapshot()
  })
})
