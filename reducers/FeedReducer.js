import {
	FEED_REWARDS_FETCH_SUCCESS,
	FEED_OFFERS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
	feedRewards: null,
	feedOffers: null
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case FEED_REWARDS_FETCH_SUCCESS:
			// console.log('home_reducer: ', action.payload);
			return {...state, feedRewards: action.payload};
		case FEED_OFFERS_FETCH_SUCCESS:
			return {...state, feedOffers: action.payload};
		default:
			return state;
	}
}
