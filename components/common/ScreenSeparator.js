import React from 'react';
import { View, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const ScreenSeparator = (props) => {
	return (
		<View style={styles.separatorStyle} />
  );
};

const styles = {
	separatorStyle: {
		height: SCREEN_HEIGHT / 50,
		backgroundColor: '#F4F4F4'
	}
};

export { ScreenSeparator };
