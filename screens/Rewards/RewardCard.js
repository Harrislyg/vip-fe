import React, {Component } from 'react';
import { ScrollView, FlatList, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { offersActivatedFetch } from '../../actions';
import RewardProgress from "../../components/common/RewardProgress";
import DetailHeader from "../../components/common/DetailHeader";
import { Bar } from 'react-native-progress';
import { Card } from 'react-native-elements';
import { rewardScrollImages, rewardCardImages } from "../../images/allImages"

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class RewardBrands extends Component {

	componentDidMount () {
		this.props.offersActivatedFetch();
	}
	onNavigate () {
		this.props.onNavigate.navigate('rewardDetail', { data: this.props.feedCard });
	}

	render () {
		// const ll = require('../../images/starbucks-bg.png');
		// const check = require('../../images/hnm-logo.png');

		const { company, points, value, feedRewardLogo, description, feedRewardBg } = this.props.feedCard;
		// console.log("Data rec", this.props.feedCard);


		// const feedRewardLogoImages = {
		// 	foodpanda: require('../../images/foodpanda-logo.png'),
		// 	gv: require('../../images/gv-logo.png'),
		// 	forever: require('../../images/forever21-logo.png'),
		// 	starbucks: require('../../images/starbucks-logo.png'),
		// 	beats: require('../../images/beats-logo.png'),
		// 	nike: require('../../images/nike-logo.png'),
		// 	gap: require('../../images/gap-logo.png'),
		// 	nikon: require('../../images/nikon-logo.png'),
		// 	apple: require('../../images/apple-logo.png'),
		// 	groupon: require('../../images/groupon-logo.png'),
		// 	sephora: require('../../images/sephora-logo.png'),
		// 	zara: require('../../images/zara-logo.png')
		// };


		return (
				<Card containerStyle={styles.containerStyle}>
					<TouchableOpacity
						onPress={this.onNavigate.bind(this)}
						activeOpacity={1}
						>
						<Image
							style={styles.logoStyle}
							source={rewardCardImages[feedRewardBg]}
							resizeMode="cover"
						/>
						<View style={styles.row}>
							<Image style={styles.check} source={rewardScrollImages[feedRewardLogo]}/>
							<Text style={styles.title}>${value} Gift Card </Text>
						</View>
						<View style={styles.lower}>
							<Text style={styles.text}>Worth <Text style={{fontWeight: "bold"}}> {points}</Text> points </Text>
							<Bar
								height={8}
								borderWidth={0}
								progress={7535 / points}
								width={200}
								color={"rgba(50, 234, 214, 1)"}
								unfilledColor={"rgba(226, 226, 226, 1)"}
								width={SCREEN_WIDTH - (SCREEN_WIDTH/9) - 24}
							/>
							<Text style={styles.text}>earned <Text style={{fontWeight: "bold"}}>{(753500 / points).toFixed(0)}%</Text> of {points} points</Text>
						</View>
					</TouchableOpacity>
				</Card>
		);
	}

}

const styles = {
	containerStyle: {
		shadowColor: '#000',
		shadowOffset: {
			width: -0.2,
			height: 0
		},
		shadowRadius: 5,
		shadowOpacity: 0.3,
		padding: 0,
		borderRadius: 3,
		alignSelf: 'center',
		width: SCREEN_WIDTH / 1.1,
		marginBottom: 10
	},

	logoStyle: {
		height: SCREEN_HEIGHT / 5,
		width: SCREEN_WIDTH / 1.1,
		padding: 0,
		borderRadius: 3,
		alignSelf: 'center'
	},

	text1: {
		backgroundColor: 'transparent',
		fontWeight: "bold",
		fontSize: 24,
		color: "#ffffff"
	},

	title: {
		display: "flex",
		alignItems: "center",
		color: "#8F8E94",
		fontSize: 14,
		fontWeight: "bold",
		paddingLeft: 11,
	},
	status: {
		paddingLeft: 5,
		paddingRight: 10,
	},
	lower: {
		display: "flex",
		paddingRight: 12,
		paddingLeft: 12,
	},
	main: {
		// marginLeft: SCREEN_WIDTH/18,
		// marginRight: SCREEN_WIDTH/18,
		// marginBottom: SCREEN_WIDTH/18,
		borderWidth: 2,
		borderColor: "#F5F5F5",
		borderRadius: 6,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
	},
	row: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "#F5F5F5",
		padding: 10,
	},
	check: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},
	text: {
		color: "#8F8E94",
		fontSize: 14,
		paddingTop: 6,
		paddingBottom: 6,
	},

};

const mapStateToProps = ({offers}) => {
	const {offersActivated} = offers;
	return {offersActivated};
};

export default connect(mapStateToProps, {offersActivatedFetch})(RewardBrands);
