import React, {Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';


class RewardsScreen extends Component {
	static navigationOptions = {
		title: 'Rewards',
		tabBarIcon: ({ tintColor }) => {
			return <Icon name="card-giftcard" size={29} color={tintColor} />
		}
	}

	render () {
		return (
			<View>
				<Text>RewardsScreen</Text>
				<Text>RewardsScreen</Text>
				<Text>RewardsScreen</Text>
				<Text>RewardsScreen</Text>
				<Text>RewardsScreen</Text>
			</View>
		);
	}
}

export default RewardsScreen;
