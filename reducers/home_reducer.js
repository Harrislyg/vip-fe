import {
	HOME_OFFERS_FETCH_SUCCESS
} from '../actions/types';

export default function (state = {}, action) {
	switch (action.type) {
		case HOME_OFFERS_FETCH_SUCCESS:
			// console.log('home_reducer: ', action.payload);
			return action.payload;
		default:
			return state;
	}
}
