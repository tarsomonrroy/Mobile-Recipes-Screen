import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';
import RecipeDetails from './screens/RecipeDetails';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomePage}
                />
                <Stack.Screen
                    name="Details"
                    component={RecipeDetails}
                    options={{
                        title: 'Detalhes da Receita'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}