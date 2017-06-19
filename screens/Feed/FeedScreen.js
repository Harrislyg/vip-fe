import { Font } from 'expo';
import React, {Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, Dimensions, FlatList, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import FeedCard from './FeedCard'
import FeedOffersCard from './FeedOffersCard'
import FeedTopHeader from './FeedTopHeader'
import { homeOffersFetch } from '../../actions'

const SCREEN_WIDTH = Dimensions.get('window').width;

class FeedScreen extends Component {
	static navigationOptions = {
		title: null,
		headerLeft: (<Image source={require('../../images/max-logo.png')} style={{width: 30, height: 30, marginLeft: SCREEN_WIDTH / 2 - 15, marginTop: 10, marginBottom: 10}} />),
		tabBarIcon: ({ tintColor }) => {
			return <Icon name="casino" size={29} color={tintColor} />
		},
		headerStyle: {
			backgroundColor: '#fff'
		}

	}

	state = {
    fontLoaded: false,
  };
	async componentDidMount() {
    await Font.loadAsync({
      'ABeeZee': require('../../assets/fonts/ABeeZee-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

	componentWillMount () {
		Font.loadAsync({
			'ABeeZee': require('../../assets/fonts/ABeeZee-Regular.ttf')
		});

		this.props.homeOffersFetch()

	}

	renderTopRow (homeOffer) {
    return <HomeOfferTop key={homeOffer.company} homeOffer={homeOffer} />

  }

	render () {
		return (
			<ScrollView
				style={styles.scrollView}
				showsVerticalScrollIndicator = {false}
			>
				{ this.state.fontLoaded ? (
				<View>
					<FeedTopHeader />
					<Text style={styles.textStyle}>
						UNLOCK REWARDS
					</Text>
					<FlatList
						contentContainerStyle={styles.feedRewardsCardStyle}
						horizontal={true}
						enableEmptySections
		        data={this.props.homeOffer}
		        renderItem={({item}) => <FeedCard feedCard={item} onNavigate={this.props.navigation} />}
						keyExtractor={item => item.company}
						showsHorizontalScrollIndicator={false}
						alwaysBounceHorizontal={true}
	      	/>
					<Text style={styles.textStyle}>
						EARN WITH OFFERS
					</Text>
					<FlatList
						contentContainerStyle={styles.feedOffersCardStyle}
						enableEmptySections
						data={this.props.homeOffer}
						renderItem={({item}) => <FeedOffersCard feedCard={item} onNavigate={this.props.navigation} />}
						keyExtractor={item => item.company}
						showsVerticalScrollIndicator={false}
						alwaysBounceVertical={true}
					>
					</FlatList>
				</View>
				) : null }
			</ScrollView>
		);
	}
}

const styles = {
	scrollView: {
		backgroundColor: '#fff'
	},

	logoStyle: {
		width: 50,
		height: 50
	},

	feedRewardsCardStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 30
	},

	textStyle: {
		marginTop: 15,
		marginLeft: 12,
		color: '#8F8E94',
		fontWeight: '600'
	},

	feedOffersCardStyle: {
		flexDirection: 'column',
		justifyContent: 'center'
	},
}

const mapStateToProps = state => {
  const homeOffer = state.home
  return { homeOffer }

}

export default connect(mapStateToProps, {homeOffersFetch}) (FeedScreen);
