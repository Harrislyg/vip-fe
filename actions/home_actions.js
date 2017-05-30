import {
	HOME_OFFERS_FETCH_SUCCESS
} from './types';

import { homeOffersData } from '../data/FeatureOffers';
// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token)
// AsyncStorage.getItem('fb_token')

export const homeOffersFetch = () => {
	return (dispatch) => {
		dispatch({ type: HOME_OFFERS_FETCH_SUCCESS, payload: homeOffersData });
	};
};
