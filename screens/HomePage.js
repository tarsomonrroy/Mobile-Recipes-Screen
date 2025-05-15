import React from "react";
import { ScrollView, Text, SafeAreaView } from 'react-native';
import RecipeCard from "../components/RecipeCard";
import styles from "../styles/home_style";

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>Bem Vindo,</Text>
            <Text style={styles.subtext}>confira as receitas do dia!</Text>

            <RecipeCard
                title="Frango com quiabo"
                description="A clássica receita com todos aqueles detalhes que fazem a diferença."
                onPress={() =>
                    navigation.navigate('Details', { recipeID: 1 })
                }
            />
            <RecipeCard
                title="Cuscuz paulista de legumes"
                description="Delicioso cuscuz paulista com legumes diversos."
                onPress={() =>
                    navigation.navigate('Details', { recipeID: 2 })
                }
            />
            <RecipeCard
                title="Bobó de Frango"
                description="Mais prático, mais acessível e tão gostoso quanto o tradicional."
                onPress={() =>
                    navigation.navigate('Details', { recipeID: 3 })
                }
            />
            <RecipeCard
                title="Cocada de forno"
                description="Uma cocada com uma casquinha crocante e centro bem cremoso."
                onPress={() =>
                    navigation.navigate('Details', { recipeID: 4 })
                }
            />
            <RecipeCard
                title="Bolo gelado de coco"
                description="Quem foi criança teve festinha na escola com direito a bolo de coco gelado embrulhado no papel-alumínio."
                onPress={() =>
                    navigation.navigate('Details', { recipeID: 5 })
                }
            />
            <RecipeCard
                title="Curau"
                description="É viagem expressa para o puro creme de milho do repertório culinário brasileiro."
                onPress={() =>
                    navigation.navigate('Details', { recipeID: 6 })
                }
            />
            <RecipeCard
                title="Frapê de café"
                description="Uma bebida deliciosa rápida e fácil de fazer."
                onPress={() =>
                    navigation.navigate('Details', { recipeID: 7 })
                }
            />
        </ScrollView>
    );
}
