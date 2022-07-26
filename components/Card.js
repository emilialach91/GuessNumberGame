import React from 'react'
import { StyleSheet, View } from 'react-native';

const Card = props => {
	return (
		<View style={{ ...styles.card, ...props.style }}>{props.children}</View>
	);
}

const styles = StyleSheet.create({
	card: {
		borderColor: '#f3f3f3',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowRadius: 2,
		shadowOpacity: 0.15,
		elevation: 8,
		backgroundColor: '#fff',
		borderRadius: 10
	},
});

export default Card