import {
	OFFERS_PERPETUAL_FETCH_SUCCESS,
	OFFERS_ONETIME_FETCH_SUCCESS,
	OFFERS_ACTIVATED_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
	offersPerpetual: null,
	offersOnetime: null,
	offersActivated: null
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case OFFERS_PERPETUAL_FETCH_SUCCESS:
			// console.log('home_reducer: ', action.payload);
			return {...state, offersPerpetual: action.payload};
		case OFFERS_ONETIME_FETCH_SUCCESS:
			return {...state, offersOnetime: action.payload};
		case OFFERS_ACTIVATED_FETCH_SUCCESS:
			return {...state, offersActivated: action.payload};
		default:
			return state;
	}
}
