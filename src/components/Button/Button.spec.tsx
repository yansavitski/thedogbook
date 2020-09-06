import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'

import { Button } from './Button'

describe('<Button />', () => {
  it('renders correctly', () => {
    expect.assertions(1)
    const tree = shallow(<Button>button text</Button>)

    expect(toJson(tree)).toMatchSnapshot()
  })

  it('renders correctly with optional props', () => {
    expect.assertions(1)
    const tree = shallow(
      <Button className="btn-text" type="submit" disabled>
        button text
      </Button>,
    )

    expect(toJson(tree)).toMatchSnapshot()
  })
})
