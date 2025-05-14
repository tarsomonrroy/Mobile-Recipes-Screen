import React from "react";
import { ScrollView, Text, SafeAreaView } from 'react-native';
import RecipeCard from "../components/RecipeCard";
import styles from "../styles/home_style";

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text style={styles.text}>Bem Vindo,</Text>
                <Text style={styles.subtext}>confira as receitas do dia!</Text>

                <RecipeCard
                    title="Frango com quiabo"
                    description="Uma receita clássica com cobertura de chocolate."
                    onPress={() =>
                        navigation.navigate('Details', { recipeID: 1 })
                    }
                />
                <RecipeCard
                    title="Bolo de Cenoura"
                    description="Uma receita clássica com cobertura de chocolate."
                    onPress={() =>
                        navigation.navigate('Details', { recipeID: 2 })
                    }
                />
                <RecipeCard
                    title="Bolo de Cenoura"
                    description="Uma receita clássica com cobertura de chocolate."
                    onPress={() =>
                        navigation.navigate('Details', { recipeID: 3 })
                    }
                />
                <RecipeCard
                    title="Bolo de Cenoura"
                    description="Uma receita clássica com cobertura de chocolate."
                    onPress={() =>
                        navigation.navigate('Details', { recipeID: 4 })
                    }
                />
                <RecipeCard
                    title="Bolo de Cenoura"
                    description="Uma receita clássica com cobertura de chocolate."
                    onPress={() =>
                        navigation.navigate('Details', { recipeID: 5 })
                    }
                />
                <RecipeCard
                    title="Bolo de Cenoura"
                    description="Uma receita clássica com cobertura de chocolate."
                    onPress={() =>
                        navigation.navigate('Details', { recipeID: 6 })
                    }
                />
                <RecipeCard
                    title="Bolo de Cenoura"
                    description="Uma receita clássica com cobertura de chocolate."
                    onPress={() =>
                        navigation.navigate('Details', { recipeID: 7 })
                    }
                />
            </ScrollView>
        </SafeAreaView>
    );
}
