import React, {Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';


class OffersScreen extends Component {
	static navigationOptions = {
		title: 'Offers',
		tabBarIcon: ({ tintColor }) => {
			return <Icon name="monetization-on" size={29} color={tintColor} />
		}
	}

	render () {
		return (
			<View>
				<Text>OffersScreen</Text>
				<Text>OffersScreen</Text>
				<Text>OffersScreen</Text>
				<Text>OffersScreen</Text>
				<Text>OffersScreen</Text>
			</View>
		);
	}
}

export default OffersScreen;
