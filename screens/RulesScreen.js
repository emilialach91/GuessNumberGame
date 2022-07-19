

import React from 'react'
import { Button, StyleSheet, View, Text } from 'react-native';


const RulesScreen = props => {
	return (
		<View>
			<Text>
				Choose a number from 0 to 99 and check if the computer can guess your number in seven moves.
			</Text>
			<Button title="Let's start" onPress={() => props.onShowMe(false)} />
		</View>
	);
}

const styles = StyleSheet.create({

});

export default RulesScreen