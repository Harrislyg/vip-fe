import React, { Component } from 'react';
import { Text, Dimensions, Image, View, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements';

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
				key={this.props.feedCard.company}
			>
				<TouchableOpacity
					onPress={this.onNavigate.bind(this)}
					activeOpacity={1}
				>
					<Image
						style={styles.imageStyle}
						source={feedOfferLogoImages[feedOfferBg]}
						resizeMode="cover"
						key={this.props.feedCard.company}
					/>
					<Image
						style={styles.logoStyle}
						source={feedOfferLogoImages[feedOfferLogo]}
						resizeMode="cover"
					/>
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
		height: SCREEN_HEIGHT / 5,
		borderRadius: 3,
		backgroundColor: '#fff',
		padding: 0
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

	logoStyle: {
		alignSelf: 'center',
		height: 50,
		width: 50,
		borderColor: '#fff',
		borderWidth: 1,
		borderRadius: 25,
		marginTop: -25

	},

	textStyle: {
		alignSelf: 'center',
		color: '#8F8E94',
		marginTop: 12,
		marginBottom: 0

	},

	imageStyle: {
		alignSelf: 'center',
		width: SCREEN_WIDTH / 1.1,
		height: SCREEN_HEIGHT / 10,
		borderRadius: 2,
		padding: 0,
		margin: 0
	}

};

export default FeedOffersCard;
