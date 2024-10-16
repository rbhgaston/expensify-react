import React from 'react'
import {Header} from '../../components/Header';
import {shallow} from 'enzyme'

test('render Header component', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>)
    expect(wrapper).toMatchSnapshot()

})

test('call startLogout on button click', () => {
    const startLogoutSpy = jest.fn()
    const wrapper = shallow(<Header startLogout={startLogoutSpy}/>)
    wrapper.find('button').simulate('click')

    expect(startLogoutSpy).toHaveBeenCalled()
})