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
					Points Collected
				</Text>
				<FlatList
					contentContainerStyle={styles.feedCardStyle}
					enableEmptySections
	        data={this.props.homeOffer}
	        renderItem={({item}) => <FeedCard feedCard={item} onNavigate={this.props.navigation} />}
					keyExtractor={item => item.company}
					showsVerticalScrollIndicator={false}
					alwaysBounceVertical={true}
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
		alignSelf: 'center',
		justifyContent: 'center'
	},

	textStyle: {
		marginTop: 15,
		marginLeft: 12
	}
}

const mapStateToProps = state => {
  const homeOffer = state.home
  return { homeOffer }

}

export default connect(mapStateToProps, {homeOffersFetch}) (FeedScreen);
