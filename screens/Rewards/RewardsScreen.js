import React, {Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, FlatList, View, Text, Image, Dimensions } from 'react-native';
import { ScreenSeparator } from '../../components/common/ScreenSeparator';
import { ScreenLineSeparator } from '../../components/common/ScreenLineSeparator';
import { Button, Icon } from 'react-native-elements';
import Detail from "../../components/common/Detail";
import DetailHeader from "../../components/common/DetailHeader";
import RewardBrands from "./RewardBrands";
import RewardCard from "./RewardCard";
import { homeRewardsFetch } from '../../actions'
import { homeOffersFetch } from '../../actions'
import { rewardSearchData, rewardsAvailableData } from "../../data/RewardsRewards";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

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

	componentDidMount() {
		this.props.homeRewardsFetch();
		this.props.homeOffersFetch();
	}

	render () {
		const a = [1,2,3,4,5,6];

		return (
			<ScrollView style={styles.scrollView}>
				<View style={styles.viewStyle}>
					<View style={styles.pointViewStyle}>
						<Text style={styles.pointStyle}>7535</Text>
					</View>
				</View>
				<ScreenSeparator />
				<View >
					<Text style={styles.textStyle}>
						SEARCH BY BRAND
					</Text>
					<ScreenLineSeparator />
					<RewardBrands searchReward={rewardSearchData}/>
				</View>
				<ScreenSeparator />
				<View >
					<Text style={styles.textStyle}>
						AVAILABLE REWARDS
					</Text>
					<ScreenLineSeparator />
					<FlatList
						contentContainerStyle={styles.feedOffersCardStyle}
						enableEmptySections
						data={rewardsAvailableData}
						renderItem={({item}) => <RewardCard feedCard={item} onNavigate={this.props.navigation} />}
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

	textStyle: {
		marginTop: 15,
		marginLeft: 12,
		color: '#8F8E94',
		fontWeight: '600'
	},

	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 10
	},

	pointViewStyle: {
		justifyContent: 'center',
		width: SCREEN_WIDTH / 7,
		height: SCREEN_HEIGHT / 27,
		borderRadius: 2,
		backgroundColor: '#0DE47F',
		padding: 0
	},

	pointStyle: {
		fontFamily: 'ABeeZee',
		color: '#fff',
		fontSize: 20,
		fontWeight: '900',
		alignSelf: 'center',
		margin: 0
	},

	separatorStyle: {
		height: SCREEN_HEIGHT / 50,
		backgroundColor: '#F4F4F4'
	},

	lineStyle: {
		height: 1.5,
		backgroundColor: '#F4F4F4',
		marginTop: 10
	}
}

const mapStateToProps = ({home}) => {
  const {homeRewards, homeOffers} = home
  return {homeRewards, homeOffers}

}

export default connect(mapStateToProps, {homeRewardsFetch, homeOffersFetch}) (RewardsScreen);
// export default RewardsScreen;
