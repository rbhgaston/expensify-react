import authReducer from '../../reducers/auth'

test('set default state', () => {
    const action = {
        type: '@@INIT'
    }
    expect(authReducer(undefined, action)).toEqual({})
})

test('set uid from login action', () => {
    const uid = 'abc123'
    const action = {
        type: 'LOGIN',
        uid
    }
    expect(authReducer({}, action)).toEqual({uid})
})

test('remove uid after logout action', () => {
    const state = {
        uid: 'abc123'
    }
    const action = {
        type: 'LOGOUT'
    }
    expect(authReducer(state, action)).toEqual({})
})