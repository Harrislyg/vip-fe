import _ from 'lodash';
import React, {Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView, ScrollView, Dimensions, FlatList } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { homeOffersFetch } from '../../actions'
import HomeOfferRow from './HomeOfferRow'
import HomeOfferCol from './HomeOfferCol'


const SCREEN_HEIGHT = Dimensions.get('window').height;

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Home',
		tabBarIcon: ({ tintColor }) => {
			return <Icon name="favorite" size={29} color={tintColor} />

		}

	}

	componentWillMount () {
		this.props.homeOffersFetch()

	}

	renderCol (homeOffer) {
    return <HomeOfferCol key={homeOffer.company} homeOffer={homeOffer} />

  }

	render () {
		return (
			<ScrollView
				style={styles.scrollView}
				showsVerticalScrollIndicator = {false}
			>
				<FlatList
					contentContainerStyle={styles.listViewRow}
					horizontal={true}
					enableEmptySections
	        data={this.props.homeOffer}
	        renderItem={({item}) => <HomeOfferRow homeOffer={item} onNavigate={this.props.navigation} />}
					keyExtractor={item => item.company}
					showsHorizontalScrollIndicator={false}
					alwaysBounceHorizontal={true}
      	/>
				<FlatList
					contentContainerStyle={styles.listViewCol}
					keyExtractor={item => item.company}
					enableEmptySections
					data={this.props.homeOffer}
	        renderItem={this.renderCol}
				/>
			</ScrollView>
		);

	}

}

const styles = {
	scrollView: {
		backgroundColor: '#fff'
	},

	listViewCol: {
		marginTop: 100,
  	flexDirection: 'row',
  	flexWrap: 'wrap',
		justifyContent: 'center'
	},

	listViewRow: {
		flexDirection: 'row',
		justifyContent: 'center'
	}
}

const mapStateToProps = state => {
  const homeOffer = state.home
	console.log('mapStateToProps', state.home)
  return { homeOffer }

}

export default connect(mapStateToProps, {homeOffersFetch}) (HomeScreen);
