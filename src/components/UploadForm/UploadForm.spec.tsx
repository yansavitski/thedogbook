import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'

import { UploadForm } from './UploadForm'

describe('<UploadForm />', () => {
  it('renders correctly', () => {
    expect.assertions(1)
    const tree = shallow(<UploadForm onLoadFile={(): void => {}} />)

    expect(toJson(tree)).toMatchSnapshot()
  })

  it('renders correctly with optional props', () => {
    expect.assertions(1)
    const tree = shallow(
      <UploadForm className="preview" onLoadFile={(): void => {}} disabled />,
    )

    expect(toJson(tree)).toMatchSnapshot()
  })
})
