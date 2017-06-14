import React, { Component } from 'react';
import { Text, Dimensions, Image, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class FeedOffersCard extends Component {
	// onNavigate () {
	// 	this.props.onNavigate.navigate('feedDetail');
	// }
	render () {
		// console.log('Row', this.props.onNavigate);
		const { company } = this.props.feedCard;
		console.log(company);
		return (
			<Card
				containerStyle={styles.cardStyle}
				key={this.props.feedCard.company}
			>
				<Image
					style={styles.imageStyle}
					source={require('../../images/amazon.jpg')}
					resizeMode="cover"
					key={this.props.feedCard.company}
				>
					<View style={styles.overlayStyle}>
					</View>
				</Image>
				<Text style={styles.textStyle}>
					{company}
				</Text>

			</Card>
		);
	}
}

const styles = {
	cardStyle: {
		alignSelf: 'center',
		width: SCREEN_WIDTH / 1.1,
		height: SCREEN_HEIGHT / 5,
		borderRadius: 2,
		backgroundColor: '#fff',
		padding: 0
	},

	overlayStyle: {
		alignSelf: 'center',
		justifyContent: 'center',
		width: SCREEN_WIDTH / 1.1,
		height: SCREEN_HEIGHT / 10,
		borderRadius: 2,
		backgroundColor: 'rgba(0,0,0,0.35)',
		padding: 0,
		margin: 0
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
		width: SCREEN_WIDTH / 1.1,
		height: SCREEN_HEIGHT / 10,
		borderRadius: 2,
		padding: 0,
		margin: 0
	}

};

export default FeedOffersCard;
