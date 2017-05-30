import _ from 'lodash';
import React, {Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView, ScrollView, Dimensions } from 'react-native';
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

		// Provide blank datasoure to avoid error
		this.createDataSource(this.props)

	}

	componentWillReceiveProps (nextProps) {
    // Receive the the props that has been fetched from homeOffersFetch
    this.createDataSource(nextProps)

  }

	createDataSource ({ homeOffer }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(homeOffer)

  }

	renderRow (homeOffer) {
    return <HomeOfferRow homeOffer={homeOffer} />
  }

	renderCol (homeOffer) {
    return <HomeOfferCol homeOffer={homeOffer} />
  }

	render () {
		console.log('Main', this.props.navigation);
		return (
			<ScrollView
				style={styles.ScrollView}
				showsVerticalScrollIndicator = {false}
			>
				<ListView
					horizontal = {true}
	        enableEmptySections
	        dataSource={this.dataSource}
	        renderRow={(data) => <HomeOfferRow homeOffer={data} onNavigate={this.props.navigation}/>}
					showsHorizontalScrollIndicator={false}
					alwaysBounceHorizontal={true}
      	/>
				<ListView
					contentContainerStyle={styles.listView}
					enableEmptySections
					dataSource={this.dataSource}
	        renderRow={this.renderCol}
				/>
			</ScrollView>
		);
	}
}

const styles = {
	ScrollView: {
		backgroundColor: '#fff'
	},

	listView: {
		marginTop: 100,
  	flexDirection: 'row',
  	flexWrap: 'wrap'
	}
}

const mapStateToProps = state => {
  const homeOffer = state.home
	console.log('mapStateToProps', state.home)
  return { homeOffer }

}

export default connect(mapStateToProps, {homeOffersFetch}) (HomeScreen);
