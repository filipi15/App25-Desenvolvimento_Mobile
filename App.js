import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Filmes from './src/pages/Filmes';
import Sinopse from './src/pages/Sinopse';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Filmes">
        <Stack.Screen name="Filmes" component={Filmes} options={{ title: 'App de Filmes' }} />
        <Stack.Screen name="Sinopse" component={Sinopse} options={{ title: 'App de Filmes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
