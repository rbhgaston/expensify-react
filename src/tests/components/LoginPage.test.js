import React from 'react'
import {shallow} from 'enzyme';
import {LoginPage} from '../../components/LoginPage';

test('render LoginPage', () => {
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
})

test('call startLogin on button click', () => {
    const startLoginSpy = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={startLoginSpy}/>)
    wrapper.find('button').simulate('click')

    expect(startLoginSpy).toHaveBeenCalled()
})