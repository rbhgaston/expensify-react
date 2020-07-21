import React from 'react'
import Header from '../../components/Header';
// import ReactShallowRenderer from 'react-test-renderer/shallow'
import {shallow} from 'enzyme'

test('render Header component', () => {
    const wrapper = shallow(<Header/>)
    expect(wrapper).toMatchSnapshot()
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})