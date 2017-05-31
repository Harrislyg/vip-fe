import React, { Component } from 'react';
import { Text, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class HomeOfferRow extends Component {
	render () {
		const { company } = this.props.homeOffer.item;
		return (
			<Card
				containerStyle={styles.cardStyle}
			>
				<Text style={styles.textStyle}>
					{company}
				</Text>

				<Button
					icon={{ name: 'shop' }}
					backgroundColor="#03A9F4"
					title="Activate"
				/>

			</Card>
		);
	}
}

const styles = {
	cardStyle: {
		alignItems: 'center',
		marginBottom: 15,
		width: SCREEN_WIDTH / 2.4
	},
	textStyle: {
		marginBottom: SCREEN_HEIGHT / 8,
		alignSelf: 'center'
	}
};

export default HomeOfferRow;
