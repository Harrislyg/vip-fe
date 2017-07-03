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
    	fontLoaded: false,
    	active: false,
	};

	handleClick() {
		this.setState({
			active: true,
		});
	}
	render () {
		// console.log(this.props);
		// const { company, points, value, feedRewardLogo, description, feedRewardBg } = this.props.data;
		// const { company, points, feedOfferLogo } = this.props.data;

		return (
			<View style={styles.main}>
				<DetailHeader type={this.props.type} image={rewardCardImages[ this.props.type === "reward" ? this.props.data.feedRewardBg : this.props.data.feedOfferBg]} navigation={this.props.navigation}/>
					{this.props.type === "reward" ? (
						<RewardProgress data={this.props.data}/>
					) : (
						<OfferProgress data={this.props.data} active={this.state.active}/>
					)}
				<DetailDescription
					data={this.props.data}
					type={this.props.type}
					company={this.props.data.company}
					criteria={this.props.data.criteria}
					description={this.props.data.description}
					onClick={this.handleClick.bind(this)}
					active={this.state.active}
					action
				/>
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
