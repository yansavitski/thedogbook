import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'

import { Gallery } from './Gallery'

describe('<Gallery />', () => {
  it('renders correctly', () => {
    expect.assertions(1)

    const tree = shallow(
      <Gallery className="wrapperGalleryClass">
        <span>text</span>
      </Gallery>,
    )

    expect(toJson(tree)).toMatchSnapshot()
  })
})
