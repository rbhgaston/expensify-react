import React from 'react'
import Dashboard from '../../components/Dashboard';
import {shallow} from 'enzyme'

test('render expense dashboard', () => {
    const wrapper = shallow(<Dashboard />)
    expect(wrapper).toMatchSnapshot()
})