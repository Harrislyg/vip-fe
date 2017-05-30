import { combineReducers } from 'redux';
import offers from './offers_reducer';
import home from './home_reducer';

export default combineReducers({
	offers: offers,
	home: home
});
