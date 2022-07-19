import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import Header from './components/Header'
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen'
import GameOverScreen from './screens/GameOverScreen'
import WinScreen from './screens/WinScreen';
import RulesScreen from './screens/RulesScreen';

export default function App() {

	const [userNumber, setUserNumber] = useState()
	const [guessRounds, setGuessRounds] = useState(0)
	const [showMe, setShowMe] = useState(true)

	const configureNewGameHandler = () => {
		setGuessRounds(0);
		setUserNumber(null);
	};

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};

	const gameOverHandler = (numOfRounds) => {
		setGuessRounds(numOfRounds);
	};

	const hideRulesScreen = (x) => {
		setShowMe(x);
	};

	let content = <RulesScreen onShowMe={hideRulesScreen} />

	if (showMe === false) {

		content = <StartGameScreen onStartGame={startGameHandler} />

		if (userNumber > 0 && guessRounds === 0) {
			content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} onWin={gameOverHandler} />
		} else if (userNumber !== 0 && guessRounds < 6 && guessRounds > 0) {
			content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />
		} else if (guessRounds > 0 && guessRounds === 6) {
			content = <WinScreen onRestart={configureNewGameHandler} />
		}
	}

	return (
		<View style={styles.screen}>
			<Header title="Guess a Number" />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
});
