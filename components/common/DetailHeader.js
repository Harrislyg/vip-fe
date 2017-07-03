import React, { Component } from 'react';
import { Image, Dimensions, TouchableOpacity } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class DetailHeader extends Component {
	render () {
		return (
			<Image
				style={styles.logoStyle}
				source={this.props.image}
			>
				<TouchableOpacity style={styles.backCaret} onPress={() => this.props.navigation.goBack()}>
					<Image style={styles.caretStyle} source={require('../../images/Chevron.png')} />
				</TouchableOpacity>
			</Image>
		);
	}
}

const styles = {
	logoStyle: {
		flex: 1,
		height: SCREEN_HEIGHT / 3.6,
		width: SCREEN_WIDTH,
		justifyContent: 'center',
		alignItems: 'center'
	},
	backCaret: {
		position: 'absolute',
		left: 20,
		top: 20,
		height: 15,
		width: 15
	},
	caretStyle: {
		height: 15,
		width: 15,
		marginTop: 10
	}
};

export default DetailHeader;
