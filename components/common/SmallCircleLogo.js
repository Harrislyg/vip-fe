import React, { Component } from 'react';
import { Image } from 'react-native';

class SmallCircleLogo extends Component {
	render () {
		const feedOfferLogoImages = {
			hnm: require('../../images/hnm-logo.png'),
			watsons: require('../../images/watsons-logo.png'),
			uniqlo: require('../../images/uniqlo-logo.png'),
			grab: require('../../images/grab-logo.png'),
			starbucks: require('../../images/starbucks-logo.png'),
			expedia: require('../../images/expedia-logo.png'),
			groupon: require('../../images/groupon-logo.png'),
			glints: require('../../images/glints-logo.png'),
			ez: require('../../images/ez-logo.png'),
			zalora: require('../../images/zalora-logo.png'),
			deliveroo: require('../../images/deliveroo-logo.png'),
			underarmour: require('../../images/underarmour-logo.png'),
			redmart: require('../../images/redmart-logo.png')

		};
		return (
			<Image
				style={styles.logoStyle}
				source={feedOfferLogoImages[this.props.image]}
				resizeMode="cover"
			/>
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
		marginTop: -25,
		backgroundColor: '#fff'
	}
};

export default SmallCircleLogo;
