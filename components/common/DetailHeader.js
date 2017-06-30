import React, { Component } from 'react';
import { Image, Dimensions, Text, View } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class DetailHeader extends Component {
	render () {

		const ll = require('../../images/starbucks-bg.jpg');
		return (
			<Image
				style={styles.logoStyle}
				source={ll}
				// resizeMode="contain"
			>
				<Text style={styles.text}> H&M </Text>
			</Image>
		);
	}
}

const styles = {
	logoStyle: {
		flex: 1,
		height: SCREEN_HEIGHT/3.6,
		width: SCREEN_WIDTH,
		justifyContent: 'center',
    	alignItems: 'center',
    	opacity: 0.8,
	},
	text: {
		backgroundColor: "transparent",
		fontWeight: "bold",
		fontSize: 24,
		color: "#ffffff"
	},
};

export default DetailHeader;
