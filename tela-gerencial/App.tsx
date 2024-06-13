import React, { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { setupDatabase } from './src/services/database';
import { CreateScreen } from '../tela-gerencial/src/screens/CreateScreen';
import { DetailScreen } from './src/screens/DetailScreen';
import { HomeScreen } from './src/screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    // Configura a database quando o aplicativo é carregado
    setupDatabase();
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Gerenciador de Tarefas" component={HomeScreen} />
          <Stack.Screen name="CreateTask" component={CreateScreen} />
          <Stack.Screen name="TaskDetail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
