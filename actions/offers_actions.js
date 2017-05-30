import {
	TEST_REDUCER
} from './types';

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token)
// AsyncStorage.getItem('fb_token')

export const facebookLogin = () => async dispatch => {
	dispatch({ type: TEST_REDUCER, payload: 'Hello' })

}
