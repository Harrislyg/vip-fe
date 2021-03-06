import React, {Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Detail from "../../components/common/Detail";

class OfferDetail extends Component {
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
		return (
			<ScrollView style={{backgroundColor: "#fff"}}>
				<Detail type="offer" navigation={this.props.navigation} data={this.props.navigation.state.params.data} action/>
			</ScrollView>
		);
	}
}

export default OfferDetail;
