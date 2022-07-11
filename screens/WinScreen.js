import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';
import Colors from '../constants/colors'


const WinScreen = props => {
	return (
		<View style={styles.screen}>
			<Text>You won!</Text>
			<Button title="START NEW GAME" color={Colors.primary} onPress={props.onRestart} />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
});

export default WinScreen