import { Font } from 'expo';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, Dimensions, FlatList, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { ScreenSeparator } from '../../components/common/ScreenSeparator';
import { ScreenLineSeparator } from '../../components/common/ScreenLineSeparator';
import HomeSquareCard from './components/HomeSquareCard';
import HomeOffersCard from './HomeOffersCard';
import HomeTopHeader from './HomeTopHeader';
import { homeRewardsFetch, homeOffersFetch } from '../../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class HomeScreen extends Component {
	static navigationOptions = {
		title: null,
		headerLeft: (<Image source={require('../../images/max-logo.png')} style={{width: 30, height: 30, padding: 0, marginLeft: SCREEN_WIDTH / 2 - 15, marginTop: 10, marginBottom: 10}} />),
		tabBarIcon: ({ tintColor }) => {
			return <Icon name="home" size={29} color={tintColor} />
		},
		headerStyle: {
			backgroundColor: '#fff'
		}

	}

	state = {
    fontLoaded: false
	};

	async componentDidMount() {
    await Font.loadAsync({
      'ABeeZee': require('../../assets/fonts/ABeeZee-Regular.ttf'),
    });

		this.props.homeRewardsFetch();
		this.props.homeOffersFetch();

    this.setState({ fontLoaded: true });

  }

	render () {
		return (
			<ScrollView
				style={styles.scrollView}
				showsVerticalScrollIndicator = {false}
			>
				{ this.state.fontLoaded ? (
				<View>
					<HomeTopHeader />
					<ScreenSeparator />
					<Text style={styles.textStyle}>
						UNLOCK REWARDS
					</Text>
					<ScreenLineSeparator />
					<FlatList
						contentContainerStyle={styles.homeRewardsCardStyle}
						horizontal={true}
						enableEmptySections
						data={this.props.homeRewards}
						renderItem={({item}) => <HomeSquareCard homeCard={item} onNavigate={this.props.navigation} />}
						keyExtractor={item => item.company}
						showsHorizontalScrollIndicator={false}
						alwaysBounceHorizontal={true}
	      	/>
					<ScreenSeparator />
					<Text style={styles.textStyle}>
						FEATURED OFFERS
					</Text>
					<ScreenLineSeparator />
					<FlatList
						contentContainerStyle={styles.homeOffersCardStyle}
						enableEmptySections
						data={this.props.homeOffers}
						renderItem={({item}) => <HomeOffersCard homeCard={item} onNavigate={this.props.navigation} />}
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

	separatorStyle: {
		height: SCREEN_HEIGHT / 50,
		backgroundColor: '#F4F4F4'
	},

	lineStyle: {
		height: 1.5,
		backgroundColor: '#F4F4F4',
		marginTop: 10
	},

	homeRewardsCardStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 15
	},

	textStyle: {
		marginTop: 15,
		marginLeft: 12,
		color: '#8F8E94',
		fontWeight: '600'
	},

	homeOffersCardStyle: {
		flexDirection: 'column',
		justifyContent: 'center'
	},
}

const mapStateToProps = ({home}) => {
  const {homeRewards, homeOffers} = home
  return {homeRewards, homeOffers}

}

export default connect(mapStateToProps, {homeRewardsFetch, homeOffersFetch}) (HomeScreen);
