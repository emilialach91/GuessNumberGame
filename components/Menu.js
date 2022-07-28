import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Menu, Provider, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const MenuExample = props => {
	const [visible, setVisible] = useState(false);

	const closeMenu = () => setVisible(false);
	const openMenu = () => setVisible(true);

	const buttonEndGameHandler = () => {
		closeMenu()
		Alert.alert(
			"End the Game",
			"Are you sure you want to end this game?",
			[
				{ text: "Cancel", onPress: () => console.log("Cancel Pressed") },
				{ text: "Yes", onPress: () => props.onEndGame() }
			]
		);
	}

	const buttonRulesHandler = () => {
		closeMenu()
		Alert.alert(
			"Rules",
			"Choose a number from 0 to 99 and check if the computer can guess your number in seven moves.",
			[
				{ text: "OK", onPress: () => closeMenu() }
			]
		);
	}

	return (
		<View style={styles.container}>
			<Provider style={styles.provider}>
				<View>
					<Menu
						style={styles.menu}
						visible={visible}
						onDismiss={() => closeMenu()}
						anchor={
							<Ionicons name="settings-outline" size={22} color="black" onPress={openMenu} />
						}>
						<Menu.Item
							onPress={() => buttonRulesHandler()}
							title="Rules"
						/>
						<Divider />
						<Menu.Item
							onPress={() => buttonEndGameHandler()}
							title="End the Game"
						/>
					</Menu>
				</View>
			</Provider>
		</View>
	);
};

export default MenuExample;

const styles = StyleSheet.create({
	container: {
		height: 40,
		width: 40,
		margin: 10,
		zIndex: 1000
	},
	provider: {
		height: 40,
		width: 40,
	},
	menu: {
		zIndex: 1000,
		width: 140,
		transform: [{ translateY: -80 }]
	}
});


