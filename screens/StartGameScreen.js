
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {

	const [enteredValue, setEteredValue] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();

	const numberInputHandler = (inputText) => {
		setEteredValue(inputText.replace(/[^0-9]/g, ''));
	};

	const resetInputHandler = () => {
		setEteredValue('');
		setConfirmed(false);
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue)
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('Invalid number!', 'Number has to be a number between 1 to 99.', [{ text: 'OK', style: 'destructive', onPress: resetInputHandler }])
			return;
		}
		setConfirmed(true);
		setSelectedNumber(chosenNumber);
		setEteredValue('');
		Keyboard.dismiss();
	};

	let confirmedOutput

	if (!confirmed) {
		confirmedOutput = (
			<Card style={styles.inputContainer}>
				<Text style={styles.title}>Start a New Game</Text>
				<Text style={styles.description}>Select Your Number</Text>
				<Input style={styles.input}
					blurOnSubmit
					autoCapitalize='none'
					autoCorrect={false}
					keyboardType="number-pad"
					maxLength={2}
					onChangeText={numberInputHandler}
					value={enteredValue}
					textAlign="center"
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.button}>
						<Button title="Reset" onPress={resetInputHandler} color={Colors.primary} />
					</View>
					<View style={styles.button}>
						<Button title="Confirm" onPress={confirmInputHandler} color={Colors.secondary} />
					</View>
				</View>
			</Card>
		)
	} else {
		confirmedOutput = (
			<Card style={styles.summaryContainer}>
				<Text style={styles.title}>Start a New Game</Text>
				<Text>You selected</Text>
				<NumberContainer>{selectedNumber}</NumberContainer>
				<View style={styles.buttonsContainer}>
					<View style={styles.button}>
						<Button title="Cancel" onPress={resetInputHandler} color={Colors.primary} />
					</View>
					<View style={styles.button}>
						<Button title="Start" onPress={() => props.onStartGame(selectedNumber)} />
					</View>
				</View>
			</Card>
		)
	}

	return (
		<TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
			<View style={styles.screen}>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
	);
}


const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		position: 'relative',
		zIndex: 1,
		backgroundColor: Colors.background
	},
	title: {
		color: Colors.title,
		fontSize: 20,
		marginVertical: 10,
	},
	description: {
		marginTop: 30
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
		padding: 20,
		height: '50%',
		marginTop: 50,

	},
	buttonsContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	button: {
		width: 100,
	},
	input: {
		width: 50,
		alignContent: 'center'
	},
	summaryContainer: {
		alignItems: 'center',
		padding: 20,
		width: 300,

	}

});

export default StartGameScreen