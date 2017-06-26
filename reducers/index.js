import { combineReducers } from 'redux';
import OffersReducer from './OffersReducer';
import FeedReducer from './FeedReducer';

export default combineReducers({
	offers: OffersReducer,
	feed: FeedReducer
});
