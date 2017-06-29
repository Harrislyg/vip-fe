import { Font } from 'expo';
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import DetailDescription from "./DetailDescription";
import DetailDetail from "./DetailDetail";
import DetailHeader from "./DetailHeader";
import OfferProgress from "./OfferProgress";
import RewardProgress from "./RewardProgress";

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
		console.log(this.props);
		return (
			<View>
				<DetailHeader type={this.props.type}/>
				{this.props.type === "reward" ? (
					<RewardProgress />
				) : (
					<OfferProgress />
				)}
				<DetailDescription type={this.props.type} action/>
				<DetailDetail type={this.props.type}/>
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

export default Detail;
