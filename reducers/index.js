import { combineReducers } from 'redux';
import OffersReducer from './OffersReducer';
import HomeReducer from './HomeReducer';

export default combineReducers({
	offers: OffersReducer,
	home: HomeReducer
});
