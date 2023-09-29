import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CheckTrail from '../screens/CheckTrail';

const Stack = createStackNavigator();

function CheckTrailStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
           <Stack.Screen 
    name="CheckTrailScreen" 
    component={CheckTrail} 
    options={{ title: 'Check Trail' }}
  />
    </Stack.Navigator>
  );
}

export default CheckTrailStack;
