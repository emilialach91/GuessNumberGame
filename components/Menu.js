import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Menu, Provider } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const MenuExample = () => {
	const [visible, setVisible] = useState(false);

	const closeMenu = () => setVisible(false);
	const openMenu = (v) => setVisible(true);
	return (
		<Provider>
			<View style={styles.container}>
				<Menu
					visible={visible}
					onDismiss={closeMenu}
					anchor={
						<AntDesign name="bars" size={24} color="black" onPress={openMenu} />
					}>
					<Menu.Item
						onPress={() => {
							Alert.alert('Action : ', 'Dupa');
						}}
						title="Print"
					/>
					<Menu.Item
						onPress={() => {
							Alert.alert('Action : ', 'Forward');
						}}
						title="Forward"
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
		height: 200,
	},
});