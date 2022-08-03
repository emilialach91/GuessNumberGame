import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors'


const WinScreen = props => {
	return (
		<View style={styles.screen}>
			<Text>You won!</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={props.onRestart}
			>
				<Text>START NEW GAME</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		position: 'relative',
	},
});

export default WinScreen