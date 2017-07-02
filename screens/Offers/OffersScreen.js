import React, {Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, ActivityIndicator, ScrollView, Image, Dimensions } from 'react-native';
import { Button, Icon, List, ListItem, SearchBar } from 'react-native-elements';
import { offersPerpetualFetch } from '../../actions';
import OffersOnetime from './OffersOnetime';
import OffersActivated from './OffersActivated';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class OffersScreen extends Component {
	static navigationOptions = {
		title: null,
		headerLeft: (<Image source={require('../../images/max-logo.png')} style={{width: 30, height: 30, marginLeft: SCREEN_WIDTH / 2 - 15, marginTop: 10, marginBottom: 10}} />),
		tabBarIcon: ({ tintColor }) => {
			return <Icon name="local-mall" size={29} color={tintColor} />
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
			grab: require('../../images/grab-logo.png'),
			starbucks: require('../../images/starbucks-logo.png'),
			groupon: require('../../images/groupon-logo.png'),
			foodpanda: require('../../images/foodpanda-logo.png'),
			redmart: require('../../images/redmart-logo.png'),
			tick: require('../../images/tick-icon.png')

		};

		return (
			<ScrollView style={styles.scrollView}>
				<View style={styles.viewStyle}>
					<View style={styles.pointViewStyle}>
						<Text style={styles.pointStyle}>7535</Text>
					</View>
				</View>
				<View style={styles.separatorStyle}></View>
				<View style={styles.offersActivatedStyle}>
					<Text style={styles.textStyle}>
						ACTIVE OFFERS
					</Text>
					<View style={styles.lineStyle}></View>
					<OffersActivated onNavigate={this.props.navigation}></OffersActivated>
				</View>
				<View style={styles.separatorStyle}></View>
				<View style={styles.offersOnetimeStyle}>
					<Text style={styles.textStyle}>
						BONUS OFFERS
					</Text>
					<View style={styles.lineStyle}></View>
					<OffersOnetime></OffersOnetime>
				</View>
				<View style={styles.separatorStyle}></View>
				<Text style={styles.textStyle}>
					ONGOING OFFERS
				</Text>
				<View style={styles.lineStyle}></View>
				<FlatList
					data={this.props.offersPerpetual}
					renderItem={({ item }) => (
						<ListItem
							roundAvatar
							title={`${item.company}`}
							subtitle={<Text style={styles.subtitleStyle}>
								<Image
								style={styles.iconStyle}
								source={feedOfferLogoImages['tick']}/><Text style={styles.boldStyle}> {item.points}</Text><Text> per </Text><Text style={styles.boldStyle}>{item.unit}</Text><Text> spent</Text></Text>}
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

	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 10
	},

	pointViewStyle: {
		justifyContent: 'center',
		width: SCREEN_WIDTH / 7,
		height: SCREEN_HEIGHT / 27,
		borderRadius: 2,
		backgroundColor: '#31EAD7',
		padding: 0
	},

	pointStyle: {
		fontFamily: 'ABeeZee',
		color: '#fff',
		fontSize: 20,
		fontWeight: '900',
		alignSelf: 'center',
		margin: 0
	},

	textStyle: {
		marginTop: 15,
		marginLeft: 12,
		color: '#8F8E94',
		fontWeight: '600'
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

	separatorStyle: {
		height: SCREEN_HEIGHT / 50,
		backgroundColor: '#F4F4F4'
	},

	lineStyle: {
		height: 1.5,
		backgroundColor: '#F4F4F4',
		marginTop: 10
	},

	offersActivatedStyle: {
		marginBottom: 7
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
