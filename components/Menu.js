import React, { useState } from 'react';
import { View, StyleSheet, Alert, Button, } from 'react-native';
import { Menu, Provider, Divider } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const MenuExample = props => {
	const [visible, setVisible] = useState(false);

	const closeMenu = () => setVisible(false);
	const openMenu = () => setVisible(true);

	return (
		<Provider style={styles.container}>
			<View>
				<Menu
					visible={visible}
					onDismiss={closeMenu}
					anchor={
						<AntDesign name="bars" size={24} color="black" onPress={openMenu} />
					}>
					<Menu.Item
						onPress={() => {
							Alert.alert(
								"Rules",
								"Choose a number from 0 to 99 and check if the computer can guess your number in seven moves.",
								[
									{ text: "OK", onPress: () => console.log("OK Pressed") }
								]
							);
						}}
						title="Rules"
					/>
					<Divider />
					<Menu.Item
						onPress={() => {
							Alert.alert(
								"End the Game",
								"Are you sure you want to end this game?",
								[
									{ text: "Cancel", onPress: () => console.log("Cancel Pressed") },
									{ text: "Yes", onPress: () => props.onEndGame() }
								]
							);
						}}
						title="End the Game"
					/>
				</Menu>
			</View>
		</Provider>
	);
};

export default MenuExample;

const styles = StyleSheet.create({
	container: {
		padding: 50,
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: 'red',
		width: 20,
		height: 20,
		zIndex: 100,
		top: 0
	},
});


