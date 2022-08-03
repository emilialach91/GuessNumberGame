

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors'

const RulesScreen = props => {
	return (
		<View style={styles.screen} >
			<Card style={styles.cardContainer}>
				<Text style={styles.text}>
					Choose a number from 0 to 99 and check if the computer can guess your number in seven moves.
				</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => props.onShowMe()}
				>
					<Text style={styles.buttonText}>Let's Start</Text>
				</TouchableOpacity>
			</Card>
		</View>
	);
}
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		backgroundColor: Colors.background,
	},
	cardContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 50,
		width: 300,
		maxWidth: '80%',
		padding: 20,
		marginBottom: 30,
		height: '50%'
	},
	button: {
		marginTop: 50,
		backgroundColor: '#648B7D'
	},
	buttonText: {
		fontSize: 18,
		margin: 10,
		color: '#fff'

	},
	text: {
		maxWidth: '90%',
		fontSize: 18,
		fontWeight: '300',
		textAlign: 'center',
		lineHeight: 30,
		color: Colors.title,
	}
});

export default RulesScreen