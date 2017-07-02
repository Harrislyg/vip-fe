import { Font } from 'expo';
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import DetailDescription from "./DetailDescription";
import DetailDetail from "./DetailDetail";
import DetailHeader from "./DetailHeader";
import OfferProgress from "./OfferProgress";
import RewardProgress from "./RewardProgress";
import { rewardScrollImages, rewardCardImages } from "../../images/allImages"

class Detail extends Component {
	async componentDidMount() {
	    await Font.loadAsync({
	      'ABeeZee': require('../../assets/fonts/ABeeZee-Regular.ttf'),
	    });
	    this.setState({ fontLoaded: true });
	}
    state = {
    fontLoaded: false
	};
	render () {
		// console.log(this.props);
		// const { company, points, value, feedRewardLogo, description, feedRewardBg } = this.props.data;
		// const { company, points, feedOfferLogo } = this.props.data;

		return (
			<View style={styles.main}>
				<DetailHeader type={this.props.type} image={ this.props.type === "reward" ? rewardCardImages[this.props.data.feedRewardBg] : this.props.data.feedOfferBg } navigation={this.props.navigation}/>
					{this.props.type === "reward" ? (
						<RewardProgress />
					) : (
						<OfferProgress />
					)}
				<DetailDescription type={this.props.type} desc={this.props.data.description} action/>
				<DetailDetail type={this.props.type}/>
			</View>
		);
	}
}

const styles = {
	main: {
		backgroundColor: "#fff",
	},
	logoStyle: {
		alignSelf: 'center',
		height: 50,
		width: 50,
		borderColor: "#fff",
		borderWidth: 1,
		borderRadius: 25,
		marginTop: -25
	}
};

export default Detail;
