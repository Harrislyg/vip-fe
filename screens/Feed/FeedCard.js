import React, { Component } from 'react';
import { Text, Dimensions, Image, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class FeedCard extends Component {
	onNavigate () {
		this.props.onNavigate.navigate('feedDetail');
	}
	render () {
		// console.log('Row', this.props.onNavigate);
		const { company } = this.props.feedCard;
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

						<View style={styles.viewStyle}>

							<Text style={styles.textStyle}>
								{company}
							</Text>

							<Button
								buttonStyle={styles.buttonStyle}
								backgroundColor="rgba(0,0,0,0)"
								fontSize={13}
								fontWeight={'bold'}
								title="EARN BONUS"
								onPress={this.onNavigate.bind(this)}
							/>

						</View>

					</View>

				</Image>

			</Card>
		);
	}
}

const styles = {
	cardStyle: {
		alignSelf: 'center',
		width: SCREEN_WIDTH / 1.2,
		borderRadius: 10,
		marginBottom: 5,
		backgroundColor: '#000',
		padding: 0
	},

	overlayStyle: {
		alignSelf: 'center',
		width: SCREEN_WIDTH / 1.2,
		height: undefined,
		borderRadius: 10,
		backgroundColor: 'rgba(0,0,0,0.4)'
	},

	viewStyle: {
		margin: 18

	},

	textStyle: {
		alignSelf: 'center',
		marginBottom: SCREEN_HEIGHT / 8,
		color: '#fff',
		fontSize: 21,
		fontWeight: 'bold'
	},

	imageStyle: {
		alignSelf: 'center',
		width: SCREEN_WIDTH / 1.2,
		height: undefined,
		borderRadius: 10
	},

	buttonStyle: {
		alignSelf: 'center',
		width: 50 + '%',
		borderColor: '#fff',
		borderWidth: 2,
		borderRadius: 8,
		padding: 5
	}
};

export default FeedCard;
