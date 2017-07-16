import Expo from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import OffersScreen from './screens/Offers/OffersScreen';
import RewardsScreen from './screens/Rewards/RewardsScreen';
import HomeScreen from './screens/Home/HomeScreen';
import HomeCardDetail from './screens/Home/HomeCardDetail';
// import AuthScreen from './screens/Auth/AuthScreen';
import RewardDetail from './screens/Rewards/RewardDetail';
import OfferDetail from './screens/Offers/OfferDetail';

class App extends React.Component {
	render () {
		const MainNavigator = TabNavigator({
			Home: {
				screen: StackNavigator({
					home: { screen: HomeScreen },
					homeDetail: { screen: HomeCardDetail }
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
			Rewards: {
				screen: StackNavigator({
					rewards: { screen: RewardsScreen },
					rewardDetail: { screen: RewardDetail }
				}, {
					headerMode: 'float',
					mode: 'modal'
				})
			}
			// Account: {
			// 	screen: StackNavigator({
			// 		home: { screen: HomeScreen },
			// 		homeoffer: { screen: HomeOffer }
			// 	}, {
			// 		headerMode: 'float',
			// 		mode: 'modal'
			// 	})
			// }
		}, {
			// tabBarPosition is an Android configuration
			initialRouteName: 'Offers',
			tabBarPosition: 'bottom',
			tabBarOptions: {
				labelStyle: { fontSize: 10, marginTop: -5 },
				activeTintColor: '#31EAD7'
			},
			lazy: true
		});

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
