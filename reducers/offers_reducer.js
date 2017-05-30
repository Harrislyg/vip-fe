import {
	TEST_REDUCER
} from '../actions/types';

export default function (state = {}, action) {
	switch (action.type) {
		case TEST_REDUCER:
			return { token: action.payload };
		default:
			return state;
	}
}
