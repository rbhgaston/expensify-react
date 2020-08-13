import {login, logout} from '../../actions/auth';

test('create a login action', () => {
    const uid = 'abc123'
    expect(login(uid)).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('create a logout action', () => {
    expect(logout()).toEqual({
        type: 'LOGOUT'
    })
})