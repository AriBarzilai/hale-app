import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SurveyScreen1 from './src/screens/SurveyScreen1';
import SurveyScreen2 from './src/screens/SurveyScreen2';
import SurveyScreen3 from './src/screens/SurveyScreen3';
import SurveyScreen4 from './src/screens/SurveyScreen4';
import EndScreen from './src/screens/EndScreen';

const Stack = createStackNavigator();

const pages = [
  { name: 'Home', component: HomeScreen },
  { name: 'SurveyScreen1', component: SurveyScreen1 },
  { name: 'SurveyScreen2', component: SurveyScreen2 },
  { name: 'SurveyScreen3', component: SurveyScreen3 },
  { name: 'SurveyScreen4', component: SurveyScreen4 },
  { name: 'EndScreen', component: EndScreen },
];
export const PAGES_LENGTH = pages.length;

//TODO: Upon returning to a previous page and unmounting stack, store data from the unmounted page
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {pages.map((page, index) => (
          <Stack.Screen
            key={index}
            name={index.toString()}
            component={page.component}
            options={{ title: `${page.name}` }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
