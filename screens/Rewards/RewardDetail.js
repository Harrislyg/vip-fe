import React, {Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Detail from "../../components/common/Detail";

class RewardDetail extends Component {
	static navigationOptions = ({navigation}) => ({
		tabBarVisible: false,
		header: null,
		// headerLeft: (<Button
		// 	title='Back'
		// 	onPress={() => navigation.goBack() }
		// 	backgroundColor='rgba(0,0,0,0)'
		// 	color='rgba(0,122,255,1)' />)
	});

	render () {
		console.log(this.props.navigation);
		return (
			<ScrollView>
				<Detail type="reward" navigation={this.props.navigation} action />
			</ScrollView>
		);
	}
}

export default RewardDetail;
