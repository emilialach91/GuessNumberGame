import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';
import Colors from '../constants/colors'


const GameOverScreen = props => {
	return (
		<View style={styles.screen}>
			<Text>The Game is Over!</Text>
			<Text>Number of rounds: {props.roundsNumber}</Text>
			<Text>Your selected number was: {props.userNumber}</Text>
			<Button title="START NEW GAME" color={Colors.primary} onPress={props.onRestart} />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
	}
});

export default GameOverScreen