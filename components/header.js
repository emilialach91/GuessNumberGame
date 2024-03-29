
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors'

const Header = props => {
	return (
		<View style={styles.header} >
			<Text style={styles.headerTitle}>{props.title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomColor: '#f3f3f3',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowRadius: 2,
		shadowOpacity: 0.15,
		elevation: 8,
		borderRadius: 10,
		flexDirection: 'row'
	},
	headerTitle: {
		color: Colors.title,
		fontSize: 18,
	},
});

export default Header