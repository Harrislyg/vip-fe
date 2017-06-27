import React, { Component } from 'react';
import { Text, Dimensions, Image, View } from 'react-native';
import { Card } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class OffersCircleCard extends Component {
	// onNavigate () {
	// 	this.props.onNavigate.navigate('feedDetail');
	// }
	render () {
		// console.log('Row', this.props.onNavigate);
		const { company, points, feedOfferLogo } = this.props.offersCard;
		const feedOfferLogoImages = {
			uniqlo: require('../../images/uniqlo-activated-logo.png'),
			adidas: require('../../images/adidas-logo.jpg'),
			dintaifung: require('../../images/dintaifung-logo.png'),
			uber: require('../../images/uber-logo.png'),
			ikea: require('../../images/ikea-logo.png')

		};
		return (
			<View style={styles.viewStyle}>
				<Card
					containerStyle={styles.cardStyle}
					key={company}
				>
					<Image
						style={styles.imageStyle}
						source={feedOfferLogoImages[feedOfferLogo]}
						resizeMode="cover"
						key={company}
					/>
				</Card>
			</View>
		);
	}
}

const styles = {
	cardStyle: {
		alignItems: 'center',
		justifyContent: 'center',
		width: SCREEN_WIDTH / 3.8,
		height: SCREEN_HEIGHT / 7,
		borderRadius: SCREEN_WIDTH / 7.7,
		marginRight: 2,
		backgroundColor: '#fff',
		padding: 0,
		shadowColor: '#000',
		shadowOffset: {
			width: -0.1,
			height: 0
		},
		shadowRadius: 5,
		shadowOpacity: 0.3
	},

	viewStyle: {
		alignItems: 'center',
		justifyContent: 'center'
	},

	textStyle: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 25,
		fontWeight: 'bold',
		margin: -14

	},

	imageStyle: {
		alignSelf: 'center',
		width: SCREEN_WIDTH / 3.8,
		height: SCREEN_HEIGHT / 7,
		borderRadius: SCREEN_WIDTH / 7.7,
		padding: 0,
		margin: 0
	}

};

export default OffersCircleCard;
