import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { Image } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class DetailDetail extends Component {
	render () {
		const feedOfferLogoImages = {
			hnm: require('../../images/hnm-logo.png'),
			watsons: require('../../images/watsons-logo.png')
		};
		return (
			<View>
				<Text style={{ fontSize: 14, fontWeight: 'bold', color: "#8F8E94", paddingLeft: SCREEN_WIDTH/18 , paddingTop: SCREEN_WIDTH/18 }}>OFFER DETAIL</Text>
				<Text style={{ fontSize: 14, color: "#8F8E94", lineHeight: 20, paddingTop: 5, paddingBottom: 12, paddingRight: SCREEN_WIDTH/18, paddingLeft: SCREEN_WIDTH/18, }}>
				Purchase needs to be done in one receipt.{"\n"}
				Offer expires on 31st December, 2017.{"\n"}
				Offer can only be used once.</Text>
			</View>
		);
	}
}

const styles = {
	logoStyle: {
		alignSelf: 'center',
		height: 50,
		width: 50,
		borderColor: '#fff',
		borderWidth: 1,
		borderRadius: 25,
		marginTop: -25
	}
};

export default DetailDetail;
