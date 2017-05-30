import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import OffersScreen from './screens/OffersScreen';
import RewardsScreen from './screens/RewardsScreen';
import HomeScreen from './screens/Home/HomeScreen';
import HomeOffer from './screens/Home/HomeOffer';
import ProfileScreen from './screens/ProfileScreen';

class App extends React.Component {
	render () {
		const MainNavigator = TabNavigator({
			home: {
				screen: StackNavigator({
					home: { screen: HomeScreen },
					homeoffer: { screen: HomeOffer }
				}, {
					headerMode: 'none',
					mode: 'modal'
				})
			},
			offers: { screen: OffersScreen },
			rewards: { screen: RewardsScreen },
			profile: { screen: ProfileScreen }
		}, {
			// tabBarPosition is an Android configuration
			tabBarPosition: 'bottom',
			tabBarOptions: {
				labelStyle: { fontSize: 10, marginTop: -5 }
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
