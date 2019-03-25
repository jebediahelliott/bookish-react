import React from 'react'
import { shallow } from 'enzyme'
import BookList from './BookList'

describe('BookList', () => {
  it('Shows a loading bar when loading', () => {
    const props = {
      loading: true
    }

    const wrapper = shallow(<BookList {...props} />)
    expect(wrapper.find('.loading').length).toEqual(1)
  })
})
