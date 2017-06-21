import { combineReducers } from 'redux';
import offers from './offers_reducer';
import FeedReducer from './FeedReducer';

export default combineReducers({
	offers: offers,
	feed: FeedReducer
});
