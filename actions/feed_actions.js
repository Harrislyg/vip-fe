import {
	FEED_REWARDS_FETCH_SUCCESS,
	FEED_OFFERS_FETCH_SUCCESS
} from './types';

import { feedRewardsData } from '../data/FeedRewards';
import { feedOffersData } from '../data/FeedOffers';

export const feedRewardsFetch = () => {
	return (dispatch) => {
		dispatch({ type: FEED_REWARDS_FETCH_SUCCESS, payload: feedRewardsData });
	};
};

export const feedOffersFetch = () => {
	return (dispatch) => {
		dispatch({ type: FEED_OFFERS_FETCH_SUCCESS, payload: feedOffersData });
	};
};
