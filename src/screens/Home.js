import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const RECIPES = [
	{
		in: "rose",
		name: 'Crock Pot Roast',
		ingredients: [
			{
				quantity: '1',
				name: 'beef roast',
				type: 'Meat'
			},
			{
				quantity: '1 package',
				name: 'brown gravy mix',
				type: 'Baking'
			},
			{
				quantity: '1 package',
				name: 'dried Italian salad dressing mix',
				type: 'Condiments'
			},
			{
				quantity: '1 package',
				name: 'dry ranch dressing mix',
				type: 'Condiments'
			},
			{
				quantity: '1/2 cup',
				name: 'water',
				type: 'Drinks'
			}
		],
		steps: [
			'Place beef roast in crock pot.',
			'Mix the dried mixes together in a bowl and sprinkle over the roast.',
			'Pour the water around the roast.',
			'Cook on low for 7-9 hours.'
		],
		timers: [ 0, 0, 0, 420 ],
		imageURL: 'http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg',
		originalURL: 'http://www.food.com/recipe/to-die-for-crock-pot-roast-27208'
	},
	{
		name: 'Roasted Asparagus',
		ingredients: [
			{
				quantity: '1 lb',
				name: ' asparagus',
				type: 'Produce'
			},
			{
				quantity: '1 1/2 tbsp',
				name: 'olive oil',
				type: 'Condiments'
			},
			{
				quantity: '1/2 tsp',
				name: 'kosher salt',
				type: 'Baking'
			}
		],
		steps: [
			'Preheat oven to 425°F.',
			'Cut off the woody bottom part of the asparagus spears and discard.',
			'With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all.",string.", and if you eat asparagus you know what I mean by that).',
			'Place asparagus on foil-lined baking sheet and drizzle with olive oil.',
			'Sprinkle with salt.',
			'With your hands, roll the asparagus around until they are evenly coated with oil and salt.',
			'Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.',
			'They should be tender when pierced with the tip of a knife.',
			'The tips of the spears will get very brown but watch them to prevent burning.',
			'They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal.'
		],
		timers: [ 0, 0, 0, 0, 0, 0, 10, 0, 0, 0 ],
		imageURL: 'http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg',
		originalURL: 'http://www.food.com/recipe/roasted-asparagus-50847'
	},
	{
		name: 'Curried Lentils and Rice',
		ingredients: [
			{
				quantity: '1 quart',
				name: 'beef broth',
				type: 'Misc'
			},
			{
				quantity: '1 cup',
				name: 'dried green lentils',
				type: 'Misc'
			},
			{
				quantity: '1/2 cup',
				name: 'basmati rice',
				type: 'Misc'
			},
			{
				quantity: '1 tsp',
				name: 'curry powder',
				type: 'Condiments'
			},
			{
				quantity: '1 tsp',
				name: 'salt',
				type: 'Condiments'
			}
		],
		steps: [
			'Bring broth to a low boil.',
			'Add curry powder and salt.',
			'Cook lentils for 20 minutes.',
			'Add rice and simmer for 20 minutes.',
			'Enjoy!'
		],
		timers: [ 0, 0, 20, 20, 0 ],
		imageURL:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.W8F54PeYb9tdBPH56CUu1AHaHa%26pid%3DApi&f=1'
	},
	{
		name: 'Big Night Pizza',
		ingredients: [
			{
				quantity: '5 teaspoons',
				name: 'yeast',
				type: 'Baking'
			},
			{
				quantity: '5 cups',
				name: 'flour',
				type: 'Baking'
			},
			{
				quantity: '4 tablespoons',
				name: 'vegetable oil',
				type: 'Baking'
			},
			{
				quantity: '2 tablespoons',
				name: 'sugar',
				type: 'Baking'
			},
			{
				quantity: '2 teaspoons',
				name: 'salt',
				type: 'Baking'
			},
			{
				quantity: '2 cups',
				name: 'hot water',
				type: 'Misc'
			},
			{
				quantity: '1/4 cup',
				name: 'pizza sauce',
				type: 'Misc'
			},
			{
				quantity: '3/4 cup',
				name: 'mozzarella cheese',
				type: 'Dairy'
			}
		],
		steps: [
			'Add hot water to yeast in a large bowl and let sit for 15 minutes.',
			'Mix in oil, sugar, salt, and flour and let sit for 1 hour.',
			'Knead the dough and spread onto a pan.',
			'Spread pizza sauce and sprinkle cheese.',
			'Add any optional toppings as you wish.',
			'Bake at 400 deg Fahrenheit for 15 minutes.',
			'Enjoy!'
		],
		timers: [ 15, 60, 0, 0, 0, 15, 0 ],
		imageURL: 'http://upload.wikimedia.org/wikipedia/commons/c/c7/Spinach_pizza.jpg'
	},
	{
		name: 'Cranberry and Apple Stuffed Acorn Squash Recipe',
		ingredients: [
			{
				quantity: '2',
				name: 'acorn squash',
				type: 'Produce'
			},
			{
				quantity: '1',
				name: 'boiling water',
				type: 'Drinks'
			},
			{
				quantity: '2',
				name: 'apples chopped into 1.4 inch pieces',
				type: 'Produce'
			},
			{
				quantity: '1/2 cup',
				name: 'dried cranberries',
				type: 'Produce'
			},
			{
				quantity: '1 teaspoon',
				name: 'cinnamon',
				type: 'Baking'
			},
			{
				quantity: '2 tablespoons',
				name: 'melted butter',
				type: 'Dairy'
			}
		],
		steps: [
			'Cut squash in half, remove seeds.',
			'Place squash in baking dish, cut-side down.',
			'Pour 1/4-inch water into dish.',
			'Bake for 30 minutes at 350 degrees F.',
			'In large bowl, combine remaining ingredients.',
			'Remove squash from oven, fill with mix.',
			'Bake for 30-40 more minutes, until squash tender.',
			'Enjoy!'
		],
		timers: [ 0, 0, 0, 30, 0, 0, 30, 0 ],
		imageURL: 'http://elanaspantry.com/wp-content/uploads/2008/10/acorn_squash_with_cranberry.jpg',
		originalURL: ''
	},
	{
		name: "Mic's Yorkshire Puds",
		ingredients: [
			{
				quantity: '200g',
				name: 'plain flour',
				type: 'Baking'
			},
			{
				quantity: '3',
				name: 'eggs',
				type: 'Dairy'
			},
			{
				quantity: '300ml',
				name: 'milk',
				type: 'Dairy'
			},
			{
				quantity: '3 tbsp',
				name: 'vegetable oil',
				type: 'Condiments'
			}
		],
		steps: [
			'Put the flour and some seasoning into a large bowl.',
			'Stir in eggs, one at a time.',
			'Whisk in milk until you have a smooth batter.',
			'Chill in the fridge for at least 30 minutes.',
			'Heat oven to 220C/gas mark 7.',
			'Pour the oil into the holes of a 8-hole muffin tin.',
			'Heat tin in the oven for 5 minutes.',
			'Ladle the batter mix into the tin.',
			'Bake for 30 minutes until well browned and risen.'
		],
		timers: [ 0, 0, 0, 30, 0, 0, 5, 0, 30 ],
		imageURL: 'http://upload.wikimedia.org/wikipedia/commons/f/f9/Yorkshire_Pudding.jpg',
		originalURL: 'http://upload.wikimedia.org/wikipedia/commons/f/f9/Yorkshire_Pudding.jpg'
	},
	{
		name: 'Old-Fashioned Oatmeal Cookies',
		ingredients: [
			{
				quantity: '1 cup',
				name: 'raisins',
				type: 'Produce'
			},
			{
				quantity: '1',
				name: 'cup water',
				type: 'Drinks'
			},
			{
				quantity: '3/4 cup',
				name: 'shortening',
				type: 'Baking'
			},
			{
				quantity: '1 1/2 cups',
				name: 'sugar',
				type: 'Baking'
			},
			{
				quantity: '2 1/2 cups',
				name: 'flour',
				type: 'Baking'
			},
			{
				quantity: '1 tsp.',
				name: 'soda',
				type: 'Baking'
			},
			{
				quantity: '1 tsp.',
				name: 'salt',
				type: 'Baking'
			},
			{
				quantity: '1 tsp.',
				name: 'cinnamon',
				type: 'Baking'
			},
			{
				quantity: '1/2 tsp.',
				name: 'baking powder',
				type: 'Baking'
			},
			{
				quantity: '1/2 tsp.',
				name: 'cloves',
				type: 'Baking'
			},
			{
				quantity: '2 cups',
				name: 'oats',
				type: 'Baking'
			},
			{
				quantity: '1/2 cup',
				name: 'chopped nuts',
				type: 'Baking'
			}
		],
		steps: [
			'Simmer raisins and water over medium heat until raisins are plump, about 15 minutes.',
			'Drain raisins, reserving the liquid.',
			'Add enough water to reserved liquid to measure 1/2 cup.',
			'Heat oven to 400°.',
			'Mix thoroughly shortening, sugar, eggs and vanilla.',
			'Stir in reserved liquid.',
			'Blend in remaining ingredients.',
			'Drop dough by rounded teaspoonfuls about 2 inches apart onto ungreased baking sheet.',
			'Bake 8 to 10 minutes or until light brown.',
			'About 6 1/2 dozen cookies.'
		],
		timers: [ 15, 0, 0, 0, 0, 0, 0, 0, 8, 0 ],
		imageURL: 'http://s3.amazonaws.com/gmi-digital-library/65caecf7-a8f7-4a09-8513-2659cf92871e.jpg',
		originalURL: '#'
	},

	{
		name: 'Curried chicken salad',
		ingredients: [
			{
				quantity: '3',
				name: 'skinless, boneless chicken breasts, halved lengthwise',
				type: 'Meat'
			},
			{
				quantity: '1/2 cup',
				name: 'mayonnaise',
				type: 'Baking'
			},
			{
				quantity: '1 tbsp',
				name: 'lemon zest',
				type: 'Produce'
			},
			{
				quantity: '1 tbsp ',
				name: 'lemon juice',
				type: 'Produce'
			},
			{
				quantity: '1 1/2 tsp',
				name: 'curry powder',
				type: 'Baking'
			},
			{
				quantity: '1/4 tsp',
				name: 'salt',
				type: 'Baking'
			},
			{
				quantity: '2',
				name: 'ripe mangoes, diced',
				type: 'Produce'
			},
			{
				quantity: '1/4 cup',
				name: 'dried cranberries',
				type: 'Produce'
			},
			{
				quantity: '2',
				name: 'green onions, thinly sliced',
				type: 'Produce'
			},
			{
				quantity: '1',
				name: 'celery stalk, finely chopped',
				type: 'Produce'
			},
			{
				quantity: '6 leaves',
				name: 'Boston lettuce',
				type: 'Produce'
			},
			{
				quantity: '6',
				name: 'English muffins, toasted',
				type: 'Misc'
			}
		],
		steps: [
			'ARRANGE chicken in a single layer in a large pot.',
			'Add water to just cover.',
			'Bring to a boil over medium-high.',
			'Flip chicken, reduce heat to medium and simmer until cooked, about 6 more min.',
			'Cool.',
			'STIR mayo with lemon zest, juice, curry and salt in large bowl.',
			'Using 2 forks, shred chicken, then stir into mayo mixture with mango, cranberries, green onions and celery.',
			'Divide among muffins with lettuce leaves',
			'Sandwich with tops'
		],
		timers: [ 0, 0, 0, 6, 0, 0, 0, 0, 0 ],
		imageURL: 'http://www.chatelaine.com/wp-content/uploads/2013/05/Curried-chicken-salad.jpg',
		originalURL: 'http://www.chatelaine.com/recipe/stovetop-cooking-method/curried-chicken-salad/'
	}
];

export default function Home() {
	const [ recipes, setRecipes ] = useState(RECIPES);

	// search function
	const searchFilter = (text) => {
		if (text) {
			const filteredList = recipes.filter((item) => {
				const itemData = item.name.toUpperCase();
				const userInput = text.toUpperCase();
				return itemData.indexOf(userInput) > -1;
			});
			setRecipes(filteredList);
			console.log(filteredList)
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
					alignSelf: 'center'
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
			marginBottom = {30}
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
