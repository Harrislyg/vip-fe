import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import OffersScreen from './screens/Offers/OffersScreen';
import RewardsScreen from './screens/Rewards/RewardsScreen';
import HomeScreen from './screens/Home/HomeScreen';
import HomeOffer from './screens/Home/HomeOffer';
import FeedScreen from './screens/Feed/FeedScreen';
import FeedCardDetail from './screens/Feed/FeedCardDetail';
import AuthScreen from './screens/Auth/AuthScreen';
import RewardDetail from "./screens/Rewards/RewardDetail";
import OfferDetail from "./screens/Offers/OfferDetail";

class App extends React.Component {
	render () {
		const MainNavigator = TabNavigator({
			// auth: { screen: AuthScreen },
			// main: {
			// 	screen: TabNavigator({
			Feed: {
				screen: StackNavigator({
					feed: { screen: FeedScreen },
					feedDetail: { screen: FeedCardDetail }
				}, {
					headerMode: 'float',
					mode: 'modal'
				})
			},
			Offers: {
				screen: StackNavigator({
					offers: { screen: OffersScreen },
					offerDetail: { screen: OfferDetail }
				}, {
					headerMode: 'float',
					mode: 'modal'
				})
			},
			// rewards: { screen: RewardsScreen },
			rewards: {
				screen: StackNavigator({
					rewards: { screen: RewardsScreen },
					rewardDetail: { screen: RewardDetail }
				}, {
					headerMode: 'float',
					mode: 'modal'
				})
			},
			home: {
				screen: StackNavigator({
					home: { screen: HomeScreen },
					homeoffer: { screen: HomeOffer }
				}, {
					headerMode: 'float',
					mode: 'modal'
				})
			}
		}, {
			// tabBarPosition is an Android configuration
			tabBarPosition: 'bottom',
			tabBarOptions: {
				labelStyle: { fontSize: 10, marginTop: -5 },
				activeTintColor: '#6AD6C8'
			},
			lazy: true
		});
		// }, {
		// 	navigationOptions: {
		// 		tabBarVisible: false
		// 	},
		// 	lazy: true
		// });

		return (
			<Provider store={store}>
				<View style={styles.container}>
					<MainNavigator />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center'
	}
});

Expo.registerRootComponent(App);
