import React, {Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';


class ProfileScreen extends Component {
	static navigationOptions = {
		title: 'Profile',
		tabBarIcon: ({ tintColor }) => {
			return <Icon name="person" size={29} color={tintColor} />
		}
	}

	render () {
		console.log(this.props.navigation)

		return (
			<View>
				<Text>ProfileScreen</Text>
				<Text>ProfileScreen</Text>
				<Text>ProfileScreen</Text>
				<Text>ProfileScreen</Text>
				<Text>ProfileScreen</Text>
			</View>
		);
	}
}

export default ProfileScreen;
