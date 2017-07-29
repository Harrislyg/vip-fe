import React, { Component } from 'react';
import { Text, Dimensions, View } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class HomeTopHeader extends Component {
	render () {
		return (
			<View style={styles.viewStyle}>
				<Text style={styles.pointStyle}>7535</Text>
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
		color: '#0DE47F',
		fontFamily: 'ABeeZee',
		fontSize: 40,
		fontWeight: 'bold'
	},

	unitViewStyle: {
		justifyContent: 'center',
		width: SCREEN_WIDTH / 11,
		height: SCREEN_HEIGHT / 36,
		borderRadius: 2,
		backgroundColor: '#0DE47F',
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

export default HomeTopHeader;
