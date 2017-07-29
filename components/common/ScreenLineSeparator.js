import React from 'react';
import { View } from 'react-native';

const ScreenLineSeparator = (props) => {
	return (
		<View style={styles.lineStyle} />
  );
};

const styles = {
	lineStyle: {
		height: 1.5,
		backgroundColor: '#F4F4F4',
		marginTop: 10
	}
};

export { ScreenLineSeparator };
