import React, { Component } from 'react';
import { Text, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class HomeOfferRow extends Component {
	render () {
		const { company } = this.props.homeOffer;
		return (
			<Card
				containerStyle={styles.cardStyle}
			>
				<Text style={{ marginBottom: SCREEN_HEIGHT / 8, textAlign: 'center' }}>
					{company}
				</Text>

				<Button
					icon={{ name: 'shop' }}
					backgroundColor="#03A9F4"
					title="Buy"
				/>

			</Card>
		);
	}
}

const styles = {
	cardStyle: {
		marginBottom: 15,
		width: SCREEN_WIDTH / 2.4
	}
};

export default HomeOfferRow;
