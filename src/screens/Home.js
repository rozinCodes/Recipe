import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RECIPES } from '../recipes';

export default function Home() {
	const [ recipes, setRecipes ] = useState(RECIPES);

	// search function
	const searchFilter = (text) => {
		if (text) {
			const filteredList = RECIPES.filter((item) => {
				const itemData = item.name.toUpperCase();
				const userInput = text.toUpperCase();
				return itemData.indexOf(userInput) > -1;
			});
			setRecipes(filteredList);
		} else {
			setRecipes(RECIPES);
		}
	};

	// rendering the flatlist
	const renderItem = ({ item, index }) => (
		<TouchableOpacity style={styles.centerRow}>
			<Image
				source={{ uri: item.imageURL }}
				style={{
					height: Dimensions.get('window').height / 4,
					width: Dimensions.get('screen').width / 1.3,
					resizeMode: 'contain',
					marginBottom: 20,
					borderRadius: 5,
				}}
			/>
			<Text style={{ fontWeight: 'bold', marginBottom: 10 }}>{item.name}</Text>

			{/* mapping the ingredients array */}
			{item.ingredients.map((ingredients, index) => (
				<View key={ingredients.name}>
					<Text style={styles.recipeName}>
						{`${index + 1} -   ${ingredients.quantity} ${ingredients.name}`}
					</Text>
				</View>
			))}
			<Text style={{ fontWeight: 'bold', marginVertical: 10 }}>Step by step guidelines</Text>

			{/* mapping the steps array */}
			{item.steps.map((steps, index) => (
				<View key={steps}>
					<Text style={styles.recipeName}>{`${index + 1} - ${steps}`}</Text>
				</View>
			))}
		</TouchableOpacity>
	);

	return (
		<View>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingHorizontal: 20,
					justifyContent: 'center',
					borderWidth: 1,
					marginTop: 20,
					marginHorizontal: 13,
					borderRadius: 10
				}}
			>
				<AntDesign name="search1" size={15} color="black" />
				<TextInput
					style={styles.input}
					placeholder="Search for a recipe"
					keyboardType="default"
					autoCorrect={false}
					onChangeText={(text) => searchFilter(text)}
				/>
			</View>
			<FlatList
				marginBottom={30}
				data={recipes}
				renderItem={renderItem}
				keyExtractor={(item, index) => item.name}
				contentContainerStyle={{ padding: 15 }}
				ItemSeparatorComponent={() => <View style={{ height: 0.5 }} />}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 85,
		justifyContent: 'center'
	},
	centerRow: {
		alignItems: 'flex-start',
		marginBottom: 40,
		borderRadius: 20,
		elevation: 3,
		padding: 30,
		backgroundColor: 'white',
		shadowColor: '#333'
	},
	recipeName: {
		paddingVertical: 5
	},
	input: {
		height: 40,
		margin: 5,
		padding: 10,
		borderRadius: 10,
		flex: 1
	}
});
