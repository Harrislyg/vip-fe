import React, { Component } from 'react';
import { Text, Dimensions, Image, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class FeedCard extends Component {
	// onNavigate () {
	// 	this.props.onNavigate.navigate('feedDetail');
	// }
	render () {
		// console.log('Row', this.props.onNavigate);
		const { company } = this.props.feedCard;
		console.log(company);
		return (
			<View style={styles.viewStyle}>
				<Card
					containerStyle={styles.cardStyle}
					key={this.props.feedCard.company}
				>
					<Image
						style={styles.imageStyle}
						source={require('../../images/amazon-logo.png')}
						resizeMode="cover"
						key={this.props.feedCard.company}
					>
						<View>
							<Card style={styles.progressCardStyle}>
								<Text style={styles.progressTextStyle}>50% completed</Text>
							</Card>
						</View>
					</Image>
				</Card>
				<Text style={styles.pointsTextStyle}>2000 PTS</Text>
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
		borderRadius: 5,
		marginRight: 2,
		backgroundColor: '#000',
		padding: 0,
		shadowColor: '#000',
		shadowOffset: {
			width: -0.1,
			height: 0
		},
		shadowRadius: 5,
		shadowOpacity: 0.3
	},

	overlayStyle: {
		alignItems: 'center',
		justifyContent: 'center',
		width: SCREEN_WIDTH / 3.8,
		height: SCREEN_HEIGHT / 7,
		borderRadius: 5,
		backgroundColor: 'rgba(0,0,0,0.2)',
		padding: 0,
		margin: 0
	},

	progressCardStyle: {
		alignSelf: 'flex-start',
		justifyContent: 'center',
		width: SCREEN_WIDTH / 5,
		height: SCREEN_HEIGHT / 30,
		borderRadius: 2,
		backgroundColor: 'rgba(0,0,0,0.5)',
		padding: 0,
		marginTop: 10,
		marginLeft: 7
	},

	progressTextStyle: {
		fontSize: 9,
		color: '#fff',
		alignSelf: 'center',
		margin: 0,
		padding: 0
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
		borderRadius: 5,
		padding: 0,
		margin: 0
	},

	pointsTextStyle: {
		alignSelf: 'center',
		marginTop: 5,
		marginLeft: 8,
		color: '#8F8E94',
		fontWeight: '500',
		fontSize: 10
	}
};

export default FeedCard;
