import React, { Component } from 'react';
import { Image, Dimensions, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { rewardScrollImages, rewardCardImages } from "../../images/allImages"

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class DetailHeader extends Component {
	render () {


		return (
			<Image
				style={styles.logoStyle}
				source={this.props.image}
			>
				<TouchableOpacity style={styles.backCaret} onPress={() => this.props.navigation.goBack()}>
					<Image source={require("../../images/Chevron.png")}/>
				</TouchableOpacity>
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
	backCaret: {
		position: "absolute",
		left: 20,
		top: 20,
		height: 15,
		width: 15,
	},
	text: {
		backgroundColor: "transparent",
		fontWeight: "bold",
		fontSize: 24,
		color: "#ffffff"
	},
};

export default DetailHeader;
