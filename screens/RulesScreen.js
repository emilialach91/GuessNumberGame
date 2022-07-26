

import React from 'react'
import { Button, StyleSheet, View, Text } from 'react-native';
import Card from '../components/Card';


const RulesScreen = props => {
	return (
		<View style={styles.screen}>
			<Card style={styles.cardContainer}>
				<Text>
					Choose a number from 0 to 99 and check if the computer can guess your number in seven moves.
				</Text>
				<Button title="Let's start" onPress={() => props.onShowMe()} />
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	cardContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
		width: 300,
		maxWidth: '80%',
		padding: 20,
		marginBottom: 30
	}
});

export default RulesScreen