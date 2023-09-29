import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlanRoute from '../screens/PlanRoute';

const Stack = createStackNavigator();

function PlanRouteStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
           <Stack.Screen 
    name="PlanRouteScreen" 
    component={PlanRoute} 
    options={{ title: 'Plan Route' }}
  />
    </Stack.Navigator>
  );
}

export default PlanRouteStack;
