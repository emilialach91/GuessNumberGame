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

	const maxAttempts = 6;

	useEffect(() => {
		if (currentGuess === props.userChoice) {
			props.onGameOver(rounds);
			setAttempt([])
		}

		if (rounds === maxAttempts) {
			props.onWin(rounds)
		}

		setAttempt((attempts) => [...attempts, { id: rounds + 1, value: currentGuess }]);

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
			<Card style={styles.rowContainer}>
				<Text>Your selected number is</Text>
				<Text style={styles.userNumber}>{userChoice}</Text>
			</Card>
			<Text>Opponent's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonsContainer}>
				<Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
				<Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')} />
			</Card>

			<View style={styles.guessContainer}>
				<Text style={styles.title}>Computer's guess:</Text>
				<FlatList
					keyExtractor={(item, index) => item.id}
					data={attempt}
					renderItem={itemData => (
						<View style={styles.list}>
							<Text style={styles.guessValue}># {itemData.item.id}</Text>
							<Text style={styles.guessValue}>{itemData.item.value}</Text>
						</View>
					)} />
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
	rowContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		maxWidth: '80%',
		padding: 10,
		marginBottom: 50
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%',
		padding: 20,
		marginBottom: 30
	},
	userNumber: {
		fontSize: 18,
		fontWeight: '600',
		marginLeft: 10
	},
	title: {
		fontWeight: 'bold',
		fontSize: 16
	},
	list: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingTop: 10
	},

});

export default GameScreen