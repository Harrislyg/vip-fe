import {
	HOME_REWARDS_FETCH_SUCCESS,
	FEED_OFFERS_FETCH_SUCCESS
} from './types';

import { homeRewardsData } from '../data/FeatureRewards';
import { feedOffersData } from '../data/FeedOffers';

export const homeRewardsFetch = () => {
	return (dispatch) => {
		dispatch({ type: HOME_REWARDS_FETCH_SUCCESS, payload: homeRewardsData });
	};
};

export const feedOffersFetch = () => {
	return (dispatch) => {
		dispatch({ type: FEED_OFFERS_FETCH_SUCCESS, payload: feedOffersData });
	};
};
