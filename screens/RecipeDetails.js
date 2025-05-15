import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { recipes } from '../components/data/Recipes';
import styles from "../styles/details_style";


const RecipeDetails = () => {
    const route = useRoute();
    const { recipeID } = route.params;
    const recipe = recipes.find((r) => r.id === recipeID);

    if (!recipe) {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text>Receita não encontrada.</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{recipe.name}</Text>
                <Text style={styles.description}>{recipe.description}</Text>

                <Text style={styles.section}>Ingredientes:</Text>
                {recipe.ingredients.map((item, index) => (
                    <Text key={index}>
                        • {item}
                    </Text>
                ))}

                <Text style={styles.section}>Modo de preparo:</Text>
                {recipe.steps.map((step, index) => (
                    <Text key={index} style={styles.prepare}>
                        {index + 1}. {step}
                    </Text>
                ))}
            </ScrollView>
    );
};

export default RecipeDetails;
