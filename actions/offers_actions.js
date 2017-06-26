import {
	OFFERS_PERPETUAL_FETCH_SUCCESS,
	OFFERS_ONETIME_FETCH_SUCCESS
} from './types';

import { offersPerpetualData, offersOnetimeData } from '../data/OffersOffers';

export const offersPerpetualFetch = () => {
	return (dispatch) => {
		dispatch({ type: OFFERS_PERPETUAL_FETCH_SUCCESS, payload: offersPerpetualData });
	};
};

export const offersOnetimeFetch = () => {
	return (dispatch) => {
		dispatch({ type: OFFERS_ONETIME_FETCH_SUCCESS, payload: offersOnetimeData });
	};
};
