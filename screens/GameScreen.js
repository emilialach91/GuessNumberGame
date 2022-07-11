import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, View, Text, Button, Alert, FlatList } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';


const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

const GameScreen = props => {
	const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
	const [rounds, setRounds] = useState(0);
	const [attempt, setAttempt] = useState([]);

	const currentLow = useRef(1);
	const currentHigh = useRef(100)

	const { userChoice, onGameOver } = props;

	const maxAttempts = 5;

	useEffect(() => {
		if (currentGuess === props.userChoice) {
			props.onGameOver(rounds);
			setAttempt([])
		}

		if (rounds === maxAttempts) {
			props.onWin(rounds)
		}

		setAttempt((attempts) => [...attempts, { id: Math.random().toString(), value: currentGuess }])

	}, [currentGuess, userChoice, onGameOver]);

	const nextGuessHandler = direction => {
		if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
			Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }])
			return;
		};
		if (direction === 'lower') {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess;
		}

		const nextGuess = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
		setCurrentGuess(nextGuess);
		setRounds(currentRound => currentRound + 1);
	}


	return (
		<View style={styles.screen}>
			<Text>Opponent's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonsContainer}>
				<Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
				<Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')} />
			</Card>
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={attempt}
				renderItem={itemData => (
					<Text>{itemData.item.value}</Text>
				)} />

		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%',
	}

});

export default GameScreen