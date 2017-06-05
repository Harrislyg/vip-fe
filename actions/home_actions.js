import {
	HOME_OFFERS_FETCH_SUCCESS
} from './types';

import { homeOffersData } from '../data/FeatureOffers';

export const homeOffersFetch = () => {
	return (dispatch) => {
		dispatch({ type: HOME_OFFERS_FETCH_SUCCESS, payload: homeOffersData });
	};

};
