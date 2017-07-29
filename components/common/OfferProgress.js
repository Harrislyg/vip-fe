import React, { Component } from 'react';
import { Image, Dimensions, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { rewardScrollImages, rewardCardImages } from "../../images/allImages"

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class OfferProgress extends Component {
	renderIcon() {
		if (this.props.data.pointsTwo === '$1') {
				return <Text ><Text style={{fontWeight: "bold", color: '#8F8E94'}}> {this.props.data.pointsOne}</Text></Text>;
			}
		return <Text style={styles.desc}><Text style={{fontWeight: "bold", color: '#8F8E94'}}> {this.props.data.pointsOne}</Text><Text style={{color: '#8F8E94'}}> {this.props.data.pointsTwo}</Text></Text>;
	}

	render () {
		const ll = require('../../images/starbucks-bg.png');
		const check = require('../../images/Check.png');

		const { company, pointsOne, pointsTwo, criteria, feedOfferBg, feedOfferLogo } = this.props.data;
		const {active} = this.props;

		return (
			<View style={styles.main}>
				<Text style={styles.title}>BONUS OFFER</Text>
				<View style={styles.row}>
					<AnimatedCircularProgress
					  size={54}
					  width={6}
					  fill={0}
					  rotation={-360}
					  tintColor="#0DE47F"
					  backgroundColor="#ffffff"
					  style={styles.container}
					>
					{(fill) => (
						<Image style={styles.imageStyle} source={rewardScrollImages[feedOfferLogo]}/>
					)}
					</AnimatedCircularProgress>
					<View style={styles.card}>
						{this.renderIcon()}
						<Text style={{color: '#8F8E94', lineHeight: 20, paddingBottom: 5}}> {criteria}</Text>
						{ active && (
							<View style={styles.row}>
							<Image style={styles.check} source={check}/>
							<Text style={styles.status}>Offer active | 0% completed</Text>
							</View>
							)
						}
					</View>
				</View>
			</View>
		);
	}
}

const styles = {
	card: {
		padding: 10,
		marginRight: SCREEN_WIDTH/18,
		paddingRight: 15,
	},
	desc:{
		// color: "#8F8E94",
		fontSize: 14,
		// fontWeight: "bold",
		lineHeight: 20,
		paddingBottom: 5
	},
	title: {
		paddingTop: 5,
		color: "#8F8E94",
		fontSize: 10,
	},
	status: {
		paddingLeft: 5,
		paddingRight: 10,
	},
	main: {
		margin: SCREEN_WIDTH/18,
		paddingLeft: 15,
		paddingRight: 15,
		borderWidth: 2,
		borderColor: "#F5F5F5",
		borderRadius: 6,
	},
	row: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
	},
	check: {
		width: 18,
		height: 18,
	},
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: 'center',
	},
	imageStyle: {
		position: 'absolute',
		top: 3,
		left: 3,
		width: 48,
		height: 48,
		borderRadius: 24,
	}
};

export default OfferProgress;
