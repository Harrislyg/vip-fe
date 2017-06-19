import React, {Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button, Card } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class FeedCardDetail extends Component {
	static navigationOptions = ({navigation}) => ({
		tabBarVisible: false,
		headerLeft: (<Button
			title='Back'
			onPress={() => navigation.goBack() }
			backgroundColor='rgba(0,0,0,0)'
			color='rgba(0,122,255,1)' />)
	})

	render () {
		return (
			<View style={styles.viewStyle}>
				<Card
					width={SCREEN_WIDTH / 1.2}
				>
					<Text style={styles.textStyle}>
						Activate Promotion
					</Text>
					<Button
						icon={{ name: 'shop' }}
						backgroundColor="#03A9F4"
						title="View Now!"
					/>
				</Card>
			</View>
		);
	}
}

const styles = {
	viewStyle: {
		alignItems: 'center'
	},
	textStyle: {
		alignSelf: 'center',
		marginBottom: SCREEN_HEIGHT / 8
	}
}

export default FeedCardDetail;
