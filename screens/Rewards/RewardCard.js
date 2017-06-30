import React, {Component } from 'react';
import { ScrollView, FlatList, View, Text, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { offersActivatedFetch } from '../../actions';
import RewardProgress from "../../components/common/RewardProgress";
import DetailHeader from "../../components/common/DetailHeader";
import { Bar } from 'react-native-progress';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class RewardBrands extends Component {

	componentDidMount () {
		this.props.offersActivatedFetch();
	}

	render () {
		const ll = require('../../images/starbucks-bg.jpg');
		const check = require('../../images/hnm-logo.png');

		return (
			<View>
				<Image
					style={styles.logoStyle}
					source={ll}
					// resizeMode="contain"
				>
					<Text style={styles.text1}> H&M </Text>
				</Image>
				<View style={styles.main}>
				<View style={styles.row}>
					<Image style={styles.check} source={check}/>
					<Text style={styles.title}>$50 Gift Card </Text>
				</View>
				<View style={styles.lower}>
					<Text style={styles.text}>Worth <Text style={{fontWeight: "bold"}}> 5,000 </Text> points </Text>
					<Bar
						height={8}
						borderWidth={0}
						progress={0.3}
						width={200}
						color={"rgba(50, 234, 214, 1)"}
						unfilledColor={"rgba(226, 226, 226, 1)"}
						width={SCREEN_WIDTH - (SCREEN_WIDTH/9) - 24}
					/>
					<Text style={styles.text}>earned <Text style={{fontWeight: "bold"}}>24%</Text> of 5,000 points</Text>
				</View>
			</View>
			</View>
		);
	}

}

const styles = {
	logoStyle: {
		// flex: 1,
		display: "flex",
		height: SCREEN_HEIGHT/5,
		width: SCREEN_WIDTH - (SCREEN_WIDTH/9),
		marginLeft: SCREEN_WIDTH/18,
		marginRight: SCREEN_WIDTH/18,
		justifyContent: 'center',
    	alignItems: 'center',
    	opacity: 0.8,
	},
	text1: {
		backgroundColor: "transparent",
		fontWeight: "bold",
		fontSize: 24,
		color: "#ffffff"
	},

	title: {
		display: "flex",
		alignItems: "center",
		color: "#8F8E94",
		fontSize: 14,
		fontWeight: "bold",
		paddingLeft: 11,
	},
	status: {
		paddingLeft: 5,
		paddingRight: 10,
	},
	lower: {
		display: "flex",
		paddingRight: 12,
		paddingLeft: 12,
	},
	main: {
		marginLeft: SCREEN_WIDTH/18,
		marginRight: SCREEN_WIDTH/18,
		marginBottom: SCREEN_WIDTH/18,
		borderWidth: 2,
		borderColor: "#F5F5F5",
		borderRadius: 6,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
	},
	row: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "#F5F5F5",
		padding: 10,
	},
	check: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},
	text: {
		color: "#8F8E94",
		fontSize: 14,
		paddingTop: 6,
		paddingBottom: 6,
	},

};

const mapStateToProps = ({offers}) => {
	const {offersActivated} = offers;
	return {offersActivated};
};

export default connect(mapStateToProps, {offersActivatedFetch})(RewardBrands);