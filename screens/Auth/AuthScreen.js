import React, {Component } from 'react';
import { View, Text, AlertIOS, TouchableHighlight } from 'react-native';
import TouchID from 'react-native-touch-id';

class AuthScreen extends Component {
	componentWillMount () {
		this.props.navigation.navigate('feed');
	}

	_pressHandler () {
		TouchID.authenticate('to demo this react-native component')
		.then(success => {
			AlertIOS.alert('Authenticated Successfully');
		})
		.catch(error => {
			AlertIOS.alert('Authentication Failed');
		});
	}

	render () {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
				react-native-touch-id
				</Text>

				<Text style={styles.instructions}>
					github.com/naoufal/react-native-touch-id
				</Text>
				<TouchableHighlight
					style={styles.btn}
					onPress={this._clickHandler}
					underlayColor='#0380BE'
					activeOpacity={1}
				>
					<Text style={{
						color: '#fff',
						fontWeight: '600'
					}}>
						Authenticate with Touch ID
					</Text>
				</TouchableHighlight>
			</View>
		);
	}
	_clickHandler () {
		console.log(TouchID);
		TouchID.isSupported()
		.then(authenticate)
		.catch(error => {
			AlertIOS.alert('TouchID not supported');
		});
	}

}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		margin: 10,
		fontSize: 20,
		fontWeight: '600',
		textAlign: 'center'
	},
	instructions: {
		marginBottom: 5,
		color: '#333333',
		fontSize: 13,
		textAlign: 'center'
	},
	btn: {
		borderRadius: 3,
		marginTop: 200,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 15,
		paddingRight: 15,
		backgroundColor: '#0391D7'
	}
};

function authenticate () {
	return TouchID.authenticate()
		.then(success => {
			AlertIOS.alert('Authenticated Successfully');
		})
		.catch(error => {
			console.log(error);
			AlertIOS.alert(error.message);
		});
}

export default AuthScreen;
