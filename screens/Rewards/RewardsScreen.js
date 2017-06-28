import React, {Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Detail from "../../components/common/Detail";
import DetailHeader from "../../components/common/DetailHeader";

class RewardsScreen extends Component {
	static navigationOptions = {
		title: 'Rewards',
		tabBarIcon: ({ tintColor }) => {
			return <Icon name="card-giftcard" size={29} color={tintColor} />
		}
	}

	render () {
		return (
			<ScrollView>
				<Detail action/>
			</ScrollView>
		);
	}
}

export default RewardsScreen;
