import React, {Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { offersActivatedFetch } from '../../actions';
import OffersCircleCard from './OffersCircleCard';

class OffersActivated extends Component {

	componentDidMount () {
		this.props.offersActivatedFetch();
	}

	render () {
		return (
			<FlatList
				contentContainerStyle={styles.feedOffersCardStyle}
				horizontal
				enableEmptySections
				data={this.props.offersActivated}
				renderItem={({item}) => <OffersCircleCard offersCard={item} onNavigate={this.props.onNavigate} />}
				keyExtractor={item => item.company}
				showsHorizontalScrollIndicator={false}
				alwaysBounceHorizontal
			/>
		);
	}

}

const styles = {
	feedOffersCardStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 18
	}
};

const mapStateToProps = ({offers}) => {
	const {offersActivated} = offers;
	return {offersActivated};
};

export default connect(mapStateToProps, {offersActivatedFetch})(OffersActivated);
