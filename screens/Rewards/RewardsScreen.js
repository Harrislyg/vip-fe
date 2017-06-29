import React, {Component } from 'react';
import { ScrollView, FlatList, View, Text, Image, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Detail from "../../components/common/Detail";
import DetailHeader from "../../components/common/DetailHeader";
import RewardBrands from "./RewardBrands";
import RewardCard from "./RewardCard";

const SCREEN_WIDTH = Dimensions.get('window').width;

class RewardsScreen extends Component {
	static navigationOptions = {
		title: null,
		headerLeft: (<Image source={require('../../images/max-logo.png')} style={{width: 30, height: 30, marginLeft: SCREEN_WIDTH / 2 - 15, marginTop: 10, marginBottom: 10}} />),
		tabBarIcon: ({ tintColor }) => {
			return <Icon name="monetization-on" size={29} color={tintColor} />
		},
		headerStyle: {
			backgroundColor: '#fff'
		}
	}
	// const a = [1,2,3,4,5,6];

	render () {
		const a = [1,2,3,4,5,6];

		return (
			<ScrollView style={styles.scrollView}>
				<View >
					<Text style={styles.text}>
						SEARCH BY BRAND
					</Text>
					<RewardBrands/>
				</View>
				<View >
					<Text style={styles.text}>
						AVAILABLE REWARDS
					</Text>
					<FlatList
						contentContainerStyle={styles.feedOffersCardStyle}
						enableEmptySections
						data={a}
						renderItem={({item}) => <RewardCard feedCard={item}  />}
						keyExtractor={item => item.company}
						showsVerticalScrollIndicator={false}
						alwaysBounceVertical={true}
					/>
				</View>
			</ScrollView>
		);
	}
}
const styles = {
	scrollView: {
		backgroundColor: '#fff',
		borderTopWidth: 0,
		borderBottomWidth: 0
	},
	text:{
		marginLeft: SCREEN_WIDTH/18,
		color: "#8F8E94",
		fontSize: 14,
		fontWeight: "bold",
		paddingTop: 6,
		paddingBottom: 6,
	}
}
export default RewardsScreen;
