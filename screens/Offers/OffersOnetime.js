import React, {Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, ActivityIndicator, ScrollView, Image, Dimensions } from 'react-native';
import { Card, Icon, List, ListItem, SearchBar } from 'react-native-elements';
import { offersOnetimeFetch } from '../../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class OffersOnetime extends Component {

	componentDidMount () {
		this.props.offersOnetimeFetch();
	}

	render () {
		const feedOfferLogoImages = {
			uniqlo: require('../../images/uniqlo-logo.png'),
			expedia: require('../../images/expedia-logo.png'),
			glints: require('../../images/glints-logo.png'),
			ez: require('../../images/ez-logo.png'),
			deliveroo: require('../../images/deliveroo-logo.png')

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
							subtitle={item.company}
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
		marginBottom: 10,
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
		margin: 10

	},

	avatarStyle: {
		width: 50,
		height: 50,
		borderRadius: 25
	}
};

const mapStateToProps = ({offers}) => {
	const {offersOnetime} = offers;
	return {offersOnetime};
};

export default connect(mapStateToProps, {offersOnetimeFetch})(OffersOnetime);
