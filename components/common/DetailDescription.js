import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { Image } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class DetailDescription extends Component {
	render () {
		const feedOfferLogoImages = {
			hnm: require('../../images/hnm-logo.png'),
			watsons: require('../../images/watsons-logo.png')
		};
		return (
			<View>
				<Text style={{ fontSize: 18, fontWeight: 'bold', color: "#8F8E94", paddingLeft: SCREEN_WIDTH/18 , paddingTop: SCREEN_WIDTH/18 }}>H&M </Text>
				<Text style={{ fontSize: 14, color: "#8F8E94", lineHeight: 20, paddingTop: 5, paddingBottom: 12, paddingRight: SCREEN_WIDTH/18, paddingLeft: SCREEN_WIDTH/18, }}>H&M ss is  your shopping destination for fashion online. We offer fashion and quality at the best price in a more sustainable way. </Text>

				{ (this.props.type === "offer") && (
					<Button
					  onPress={ () => {console.log("sdf")}}
					  icon={{name: 'attachment', size: 30, color: '#31EAD7'}}
					  buttonStyle={{ paddingLeft: SCREEN_WIDTH/18, width: (SCREEN_WIDTH - (SCREEN_WIDTH/9)), backgroundColor: 'white', borderRadius: 10, borderColor: "#31EAD7", borderWidth: 1, height: SCREEN_HEIGHT/20, marginTop: 5, marginBottom: 5 }}
					  textStyle={{ textAlign: 'center' }}
					  title="View Website"
					  color="#31EAD7"
					/>
				)}
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

export default DetailDescription;
