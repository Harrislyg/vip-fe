import React, {Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { Button, Icon, List, ListItem, SearchBar } from 'react-native-elements';
import { feedRewardsFetch } from '../../actions';


class OffersScreen extends Component {
	static navigationOptions = {
		title: 'Offers',
		tabBarIcon: ({ tintColor }) => {
			return <Icon name="monetization-on" size={29} color={tintColor} />
		}
	}

	componentWillMount () {
		this.props.feedRewardsFetch();

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

	renderHeader = () => {
    return <SearchBar placeholder="Type Here..." round />;
  };

	renderFooter = () => {
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

	render () {
		return (
			<List
				containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}
			>
				<FlatList
					data={this.props.OffersOffer}
					renderItem={({ item }) => (
						<ListItem
							roundAvatar
							title={`${item.company}`}
							subtitle={item.company}
							containerStyle={{ borderBottomWidth: 0 }}
							avatar={'dog'}
						/>
					)}
					ItemSeparatorComponent={this.renderSeparator}
					ListHeaderComponent={this.renderHeader}
					ListFooterComponent={this.renderFooter}
					keyExtractor={item => item.company}
				/>
			</List>

		);
	}

}

const mapStateToProps = state => {
  const OffersOffer = state.home
  return { OffersOffer }

}

export default connect(mapStateToProps, {feedRewardsFetch}) (OffersScreen);
