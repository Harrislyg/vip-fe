import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class HomeOfferRow extends Component {
	onNavigate () {
		this.props.onNavigate.navigate('homeoffer');
	}
	render () {
		console.log('Row', this.props.onNavigate);
		const { company } = this.props.homeOffer;
		return (
			<Card
				width={SCREEN_WIDTH / 1.2}
			>
				<Text style={{ marginBottom: SCREEN_HEIGHT / 8, textAlign: 'center' }}>
					{company}
				</Text>

				<Button
					icon={{ name: 'shop' }}
					backgroundColor="#03A9F4"
					title="View Now!"
					onPress={this.onNavigate.bind(this)}
				/>

			</Card>
		);
	}
}

export default HomeOfferRow;
