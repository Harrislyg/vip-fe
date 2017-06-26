import React, {Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, ActivityIndicator, ScrollView, Image, Dimensions } from 'react-native';
import { Button, Icon, List, ListItem, SearchBar } from 'react-native-elements';
import { offersPerpetualFetch } from '../../actions';
import OffersOnetime from './OffersOnetime';
import OffersActivated from './OffersActivated';

const SCREEN_WIDTH = Dimensions.get('window').width;

class OffersScreen extends Component {
	static navigationOptions = {
		title: null,
		headerLeft: (<Image source={require('../../images/max-logo.png')} style={{width: 30, height: 30, marginLeft: SCREEN_WIDTH / 2 - 15, marginTop: 10, marginBottom: 10}} />),
		tabBarIcon: ({ tintColor }) => {
			return <Icon name="monetization-on" size={29} color={tintColor} />
		},
		headerStyle: {
			backgroundColor: '#fff'
		}

	}

	componentWillMount () {
		this.props.offersPerpetualFetch();

	}

	renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

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
			redmart: require('../../images/redmart-logo.png')

		};

		return (
			<ScrollView style={styles.scrollView}>
				<View style={styles.offersActivatedStyle}>
					<Text style={styles.textStyle}>
						ACTIVATED OFFERS
					</Text>
					<OffersActivated></OffersActivated>
				</View>
				<View style={styles.offersOnetimeStyle}>
					<Text style={styles.textStyle}>
						ONE-TIME OFFERS
					</Text>
					<OffersOnetime></OffersOnetime>
				</View>
				<Text style={styles.textStyle}>
					ONGOING OFFERS
				</Text>
				<FlatList
					data={this.props.offersPerpetual}
					renderItem={({ item }) => (
						<ListItem
							roundAvatar
							title={`${item.company}`}
							subtitle={item.company}
							containerStyle={styles.offersPerpetualItemStyle}
							avatar={feedOfferLogoImages[item.feedOfferLogo]}
							avatarStyle={styles.perpetualAvatarStyle}
						/>
					)}
					ItemSeparatorComponent={this.renderSeparator}
					keyExtractor={item => item.company}
				/>
			</ScrollView>

		);
	}

}

const styles = {
	scrollView: {
		backgroundColor: '#fff',
		borderTopWidth: 0,
		borderBottomWidth: 0
	},

	textStyle: {
		marginTop: 15,
		marginLeft: 12,
		color: '#8F8E94',
		fontWeight: '600'
	},

	offersActivatedStyle: {
		marginBottom: 15
	},

	offersOnetimeStyle: {
		marginBottom: 25
	},

	offersPerpetualItemStyle: {
		borderBottomWidth: 0,
		marginTop: 10
	},

	perpetualAvatarStyle: {
		height: 42,
		width: 42,
		borderRadius: 21
	}
}

const mapStateToProps = ({offers}) => {
  const {offersPerpetual} = offers
  return {offersPerpetual}

}

export default connect(mapStateToProps, {offersPerpetualFetch}) (OffersScreen);
