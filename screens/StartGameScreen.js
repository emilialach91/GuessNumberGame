
import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const StartGameScreen = props => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start a New Game</Text>
			<View style={styles.inputContainer}>
				<Text>Select a Number</Text>
				<TextInput />
				<View style={styles.buttonsContainer}>
					<Button style={styles.resetButton} title="Reset" onPress={() => { }} />
					<Button style={styles.confirmButton} title="Confirm" onPress={() => { }} />
				</View>
			</View>
		</View>
	);
}


const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	title: {
		color: 'black',
		fontSize: 20,
		marginVertical: 10,
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
		borderColor: '#f3f3f3',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 6,
		shadowOpacity: 0.26,
		elevation: 8,
		backgroundColor: '#fff',
		padding: 20;
	},
	buttonsContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	resetButton: {

	},
	confirmButton: {

	},

});
export default StartGameScreen