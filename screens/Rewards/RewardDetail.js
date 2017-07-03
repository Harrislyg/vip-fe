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
		console.log("pararms: ", this.props.navigation.state.params.data);
		return (
			<ScrollView style={{backgroundColor: "#fff"}}>
				<Detail type="reward" navigation={this.props.navigation} data={this.props.navigation.state.params.data} action />
			</ScrollView>
		);
	}
}

export default RewardDetail;
