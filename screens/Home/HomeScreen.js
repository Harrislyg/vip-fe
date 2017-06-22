import _ from 'lodash';
import React, {Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, Dimensions, FlatList } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { feedRewardsFetch } from '../../actions'
import HomeOfferTop from './HomeOfferTop'
import HomeOfferBtm from './HomeOfferBtm'

const SCREEN_HEIGHT = Dimensions.get('window').height;

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Home',
		tabBarIcon: ({ tintColor }) => {
			return <Icon name="favorite" size={29} color={tintColor} />

		}

	}

	componentWillMount () {
		this.props.feedRewardsFetch()

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
				<Text style={styles.textStyle}>
					Flash Offers
				</Text>
				<FlatList
					contentContainerStyle={styles.topRowList}
					horizontal={true}
					keyExtractor={item => item.company}
					enableEmptySections
					data={this.props.homeOffer}
	        renderItem={this.renderTopRow}
					showsHorizontalScrollIndicator={false}
					alwaysBounceHorizontal={true}
				/>
				<Text style={styles.textStyle}>
					Earn Bonuses
				</Text>
				<FlatList
					contentContainerStyle={styles.btmRowList}
					horizontal={true}
					enableEmptySections
	        data={this.props.homeOffer}
	        renderItem={({item}) => <HomeOfferBtm homeOffer={item} onNavigate={this.props.navigation} />}
					keyExtractor={item => item.company}
					showsHorizontalScrollIndicator={false}
					alwaysBounceHorizontal={true}
      	/>
			</ScrollView>
		);

	}

}

const styles = {
	scrollView: {
		backgroundColor: '#fff'
	},

	topRowList: {
  	flexDirection: 'row',
  	flexWrap: 'wrap',
		justifyContent: 'center'
	},

	btmRowList: {
		flexDirection: 'row',
		justifyContent: 'center'
	},

	textStyle: {
		marginTop: 10,
		marginLeft: 12
	}
}

const mapStateToProps = state => {
  const homeOffer = state.home
  return { homeOffer }

}

export default connect(mapStateToProps, {feedRewardsFetch}) (HomeScreen);
