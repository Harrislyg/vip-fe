import React, { Component } from 'react';
import { Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import SmallCircleLogo from '../../components/common/SmallCircleLogo';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class FeedOffersCard extends Component {
	onNavigate () {
		this.props.onNavigate.navigate('feedDetail');
	}

	renderIcon (pointsOne, pointsTwo, feedOfferLogoImages) {
		if (pointsTwo === '$1') {
			return <Text><Image style={styles.iconStyle} source={feedOfferLogoImages['bolt']} /><Text style={styles.boldStyle}> {pointsOne}</Text><Text> per </Text><Text style={styles.boldStyle}>{pointsTwo}</Text><Text> spent</Text></Text>;
		}
		return <Text><Image style={styles.iconStyle} source={feedOfferLogoImages['piggy']} /><Text style={styles.boldStyle}> {pointsOne}</Text><Text> {pointsTwo}</Text></Text>;
	}

	render () {
		// console.log('Row', this.props.onNavigate);
		const { company, feedOfferLogo, feedOfferBg, pointsOne, pointsTwo } = this.props.feedCard;
		const feedOfferLogoImages = {
			hnmBg: require('../../images/hnm-bg.png'),
			watsonsBg: require('../../images/watsons-bg.png'),
			uniqloBg: require('../../images/uniqlo-bg.png'),
			grabBg: require('../../images/grab-bg.png'),
			starbucksBg: require('../../images/starbucks-bg.png'),
			expediaBg: require('../../images/expedia-bg.png'),
			grouponBg: require('../../images/groupon-bg.png'),
			glintsBg: require('../../images/glints-bg.png'),
			ezBg: require('../../images/ez-bg.png'),
			zaloraBg: require('../../images/zalora-bg.png'),
			deliverooBg: require('../../images/deliveroo-bg.png'),
			underarmourBg: require('../../images/underarmour-bg.png'),
			redmartBg: require('../../images/redmart-bg.png'),
			bolt: require('../../images/bolt-icon.png'),
			piggy: require('../../images/piggy-icon.png')

		};
		return (
			<Card
				containerStyle={styles.cardStyle}
				key={company}
			>
				<TouchableOpacity
					onPress={this.onNavigate.bind(this)}
					activeOpacity={1}
				>
					<Image
						style={styles.imageStyle}
						source={feedOfferLogoImages[feedOfferBg]}
						resizeMode="cover"
						key={company}
					/>
					<SmallCircleLogo image={feedOfferLogo} />
					<Text style={styles.subtitleStyle}>{this.renderIcon(pointsOne, pointsTwo, feedOfferLogoImages)}</Text>
				</TouchableOpacity>
			</Card>
		);
	}
}

const styles = {
	touchableStyle: {
		marginTop: 100
	},

	cardStyle: {
		alignSelf: 'center',
		width: SCREEN_WIDTH / 1.1,
		height: SCREEN_HEIGHT / 4,
		borderRadius: 3,
		backgroundColor: '#fff',
		marginBottom: 15,
		padding: 0,
		shadowColor: '#000',
		shadowOffset: {
			width: -0.2,
			height: 0
		},
		shadowRadius: 5,
		shadowOpacity: 0.3
	},

	// overlayStyle: {
	// 	alignSelf: 'center',
	// 	justifyContent: 'center',
	// 	width: SCREEN_WIDTH / 1.1,
	// 	height: SCREEN_HEIGHT / 10,
	// 	borderRadius: 2,
	// 	backgroundColor: 'rgba(0,0,0,0.35)',
	// 	padding: 0,
	// 	margin: 0
	// },

	subtitleStyle: {
		alignSelf: 'center',
		fontSize: 11,
		color: '#8F8E94',
		marginLeft: 11,
		marginTop: 12
	},

	boldStyle: {
		color: '#757575',
		fontWeight: '500'
	},

	imageStyle: {
		alignSelf: 'center',
		width: SCREEN_WIDTH / 1.1,
		height: SCREEN_HEIGHT / 7,
		borderRadius: 3,
		padding: 0,
		margin: 0
	},

	iconStyle: {
		width: 10,
		height: 10
	}

};

export default FeedOffersCard;
