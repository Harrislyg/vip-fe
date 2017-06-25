import React, { Component } from 'react';
import { Text, Dimensions, View } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class FeedTopHeader extends Component {
	render () {
		return (
			<View style={styles.viewStyle}>
				<Text style={styles.pointStyle}>532</Text>
				<View style={styles.unitViewStyle}>
					<Text style={styles.unitStyle}>PTS</Text>
				</View>
			</View>
		);
	}
}

const styles = {
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 15,
		marginBottom: 15
	},

	pointStyle: {
		color: '#31EAD7',
		fontFamily: 'ABeeZee',
		fontSize: 35,
		fontWeight: 'bold'
	},

	unitViewStyle: {
		justifyContent: 'center',
		width: SCREEN_WIDTH / 11,
		height: SCREEN_HEIGHT / 36,
		borderRadius: 2,
		backgroundColor: '#31EAD7',
		padding: 0
	},

	unitStyle: {
		fontFamily: 'ABeeZee',
		color: '#fff',
		fontSize: 10,
		fontWeight: '900',
		alignSelf: 'center',
		margin: 0
	}
};

export default FeedTopHeader;