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

	render () {
		// console.log('Row', this.props.onNavigate);
		const { company, feedOfferLogo, feedOfferBg } = this.props.feedCard;
		const feedOfferLogoImages = {
			hnmBg: require('../../images/hnm-bg.jpg'),
			hnm: require('../../images/hnm-logo.png'),
			watsonsBg: require('../../images/watsons-bg.jpg'),
			watsons: require('../../images/watsons-logo.png')
		};
		console.log(this.props.feedCard);
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
					<Text style={styles.textStyle}>
						50 points per $1 spent
					</Text>
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

	textStyle: {
		alignSelf: 'center',
		color: '#8F8E94',
		marginTop: 12,
		marginBottom: 0

	},

	imageStyle: {
		alignSelf: 'center',
		width: SCREEN_WIDTH / 1.1,
		height: SCREEN_HEIGHT / 7,
		borderRadius: 2,
		padding: 0,
		margin: 0
	}

};

export default FeedOffersCard;
