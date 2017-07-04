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

		const { company } = this.props;

		return (
			<View>
				{ (this.props.type === "offer") && (
					<Button
					  onPress={this.props.onClick}
					  // icon={{name: 'attachment', size: 30, color: '#31EAD7'}}
					  buttonStyle={this.props.active ? styles.active : styles.inactive}
						// containerViewStyle={this.props.active ? styles.active : styles.inactive}
					  textStyle={{ textAlign: 'center' }}
					  title={this.props.active ? "Activated" : "Activate"}
					  color={this.props.active ? "#ffffff" : "#31EAD7"}
					/>
				)}
				<Text style={{ fontSize: 18, fontWeight: 'bold', color: "#8F8E94", paddingLeft: SCREEN_WIDTH/18 , paddingTop: SCREEN_WIDTH/18 }}>{company} </Text>
				<Text style={{ fontSize: 14, color: "#8F8E94", lineHeight: 20, paddingTop: 5, paddingBottom: 12, paddingRight: SCREEN_WIDTH/18, paddingLeft: SCREEN_WIDTH/18, }}>
					{ (this.props.type === "offer") ? ( this.props.criteria) : (this.props.description)}
				</Text>
			</View>
		);
	}
}

const styles = {
	inactive: {
		// width: SCREEN_WIDTH - (SCREEN_WIDTH/9),
		// marginLeft: SCREEN_WIDTH/18,
		backgroundColor: '#fff',
		borderRadius: 5,
		borderColor: "#31EAD7",
		borderWidth: 1,
		height: SCREEN_HEIGHT/16,
		marginTop: 5,
		marginBottom: 5
	},
	active: {
		backgroundColor: "#31EAD7",
		borderRadius: 5,
		// borderColor: "#31EAD7",
		// borderWidth: 1,
		height: SCREEN_HEIGHT/16,
		marginTop: 5,
		marginBottom: 5
	},
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
