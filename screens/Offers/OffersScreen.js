import React, {Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { Button, Icon, List, ListItem, SearchBar } from 'react-native-elements';
import { feedOffersFetch } from '../../actions';


class OffersScreen extends Component {
	static navigationOptions = {
		title: 'Offers',
		tabBarIcon: ({ tintColor }) => {
			return <Icon name="monetization-on" size={29} color={tintColor} />
		}
	}

	componentWillMount () {
		this.props.feedOffersFetch();

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
			ez: require('../../images/ez-logo.png')


		};

		return (
			<List
				containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}
			>
				<FlatList
					data={this.props.feedOffers}
					renderItem={({ item }) => (
						<ListItem
							roundAvatar
							title={`${item.company}`}
							subtitle={item.company}
							containerStyle={{ borderBottomWidth: 0 }}
							avatar={feedOfferLogoImages[item.feedOfferLogo]}
						/>
					)}
					ItemSeparatorComponent={this.renderSeparator}
					keyExtractor={item => item.company}
				/>
			</List>

		);
	}

}

const mapStateToProps = ({feed}) => {
  const {feedOffers} = feed
  return {feedOffers}

}

export default connect(mapStateToProps, {feedOffersFetch}) (OffersScreen);
