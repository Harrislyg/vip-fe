import {
	HOME_REWARDS_FETCH_SUCCESS,
	HOME_OFFERS_FETCH_SUCCESS
} from './types';

import { homeRewardsData } from '../data/HomeRewards';
import { homeOffersData } from '../data/HomeOffers';

export const homeRewardsFetch = () => {
	return (dispatch) => {
		dispatch({ type: HOME_REWARDS_FETCH_SUCCESS, payload: homeRewardsData });
	};
};

export const homeOffersFetch = () => {
	return (dispatch) => {
		dispatch({ type: HOME_OFFERS_FETCH_SUCCESS, payload: homeOffersData });
	};
};
