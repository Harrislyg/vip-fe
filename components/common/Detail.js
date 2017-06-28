import React, { Component } from 'react';
import { Image, View } from 'react-native';
import DetailDescription from "./DetailDescription";
import DetailDetail from "./DetailDetail";
import DetailHeader from "./DetailHeader";
import OfferProgress from "./OfferProgress";

class Detail extends Component {
	render () {
		return (
			<View>
				<DetailHeader/>
				<OfferProgress />
				<DetailDescription action/>
				<DetailDetail/>
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
