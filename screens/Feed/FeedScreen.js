import React, {Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, Dimensions, FlatList } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import FeedCard from './FeedCard'
import { homeOffersFetch } from '../../actions'


class FeedScreen extends Component {
	static navigationOptions = {
		title: 'Feed',
		tabBarIcon: ({ tintColor }) => {
			return <Icon name="casino" size={29} color={tintColor} />
		},
		headerTintColor: '#fff',
		headerStyle: {
			backgroundColor: '#21CE99'
		}

	}

	componentWillMount () {
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
				<Text style={styles.textStyle}>
					UNLOCK REWARDS
				</Text>
				<FlatList
					contentContainerStyle={styles.feedCardStyle}
					horizontal={true}
					enableEmptySections
	        data={this.props.homeOffer}
	        renderItem={({item}) => <FeedCard feedCard={item} onNavigate={this.props.navigation} />}
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

	feedCardStyle: {
		flexDirection: 'row',
		justifyContent: 'center'
	},

	textStyle: {
		marginTop: 15,
		marginLeft: 12,
		color: '#8F8E94'
	}
}

const mapStateToProps = state => {
  const homeOffer = state.home
  return { homeOffer }

}

export default connect(mapStateToProps, {homeOffersFetch}) (FeedScreen);
