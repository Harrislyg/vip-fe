import React, {Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Detail from "../../components/common/Detail";

class OfferDetail extends Component {

	render () {
		return (
			<ScrollView>
				<Detail type="offer" action/>
			</ScrollView>
		);
	}
}

export default OfferDetail;
