import React, {Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Dimensions, Text, Image } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { offersOnetimeFetch } from '../../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class OffersOnetime extends Component {

	componentDidMount () {
		this.props.offersOnetimeFetch();
	}

	renderIcon (item, feedOfferLogoImages) {
		if (item.pointsTwo === '$1') {
			return <Text><Image style={styles.iconStyle} source={feedOfferLogoImages['bolt']} /><Text style={styles.boldStyle}> {item.pointsOne}</Text><Text> per </Text><Text style={styles.boldStyle}>{item.pointsTwo}</Text><Text> spent</Text></Text>;
		}
		return <Text><Image style={styles.iconStyle} source={feedOfferLogoImages['piggy']} /><Text style={styles.boldStyle}> {item.pointsOne}</Text><Text> {item.pointsTwo}</Text></Text>;
	}

	render () {
		const feedOfferLogoImages = {
			uniqlo: require('../../images/uniqlo-logo.png'),
			expedia: require('../../images/expedia-logo.png'),
			glints: require('../../images/glints-logo.png'),
			citi: require('../../images/citi-logo.png'),
			ez: require('../../images/ez-logo.png'),
			deliveroo: require('../../images/deliveroo-logo.png'),
			bolt: require('../../images/bolt-icon.png'),
			piggy: require('../../images/piggy-icon.png')

		};

		return (
			<FlatList
				data={this.props.offersOnetime}
				renderItem={({ item }) => (
					<Card
						containerStyle={styles.carStyle}
						>
						<ListItem
							roundAvatar
							title={`${item.company}`}
							subtitle={<Text style={styles.subtitleStyle}>{this.renderIcon(item, feedOfferLogoImages)}</Text>}
							containerStyle={styles.listItemStyle}
							avatar={feedOfferLogoImages[item.feedOfferLogo]}
							avatarStyle={styles.avatarStyle}
						/>
					</Card>
				)}
				// ItemSeparatorComponent={this.renderSeparator}
				keyExtractor={item => item.company}
			/>
		);
	}

}

const styles = {
	carStyle: {
		width: SCREEN_WIDTH / 1.1,
		borderRadius: 3,
		backgroundColor: '#fff',
		marginBottom: 5,
		padding: 0,
		shadowColor: '#8F8E94',
		shadowOffset: {
			width: -0.2,
			height: -0.3
		},
		shadowRadius: 5,
		shadowOpacity: 0.3
	},

	listItemStyle: {
		borderBottomWidth: 0,
		margin: 7

	},

	boldStyle: {
		color: '#757575',
		fontWeight: '500'
	},

	subtitleStyle: {
		color: '#8F8E94',
		marginLeft: 11,
		marginTop: 2
	},

	iconStyle: {
		width: 10,
		height: 10
	},

	avatarStyle: {
		width: 42,
		height: 42,
		borderRadius: 21
	}
};

const mapStateToProps = ({offers}) => {
	const {offersOnetime} = offers;
	return {offersOnetime};
};

export default connect(mapStateToProps, {offersOnetimeFetch})(OffersOnetime);
