import {
	HOME_REWARDS_FETCH_SUCCESS,
	HOME_OFFERS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
	homeRewards: null,
	homeOffers: null
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case HOME_REWARDS_FETCH_SUCCESS:
			// console.log('home_reducer: ', action.payload);
			return {...state, homeRewards: action.payload};
		case HOME_OFFERS_FETCH_SUCCESS:
			return {...state, homeOffers: action.payload};
		default:
			return state;
	}
}
