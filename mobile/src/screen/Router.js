import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from './LoginScreen/LoginScreen'

const Stack = createStackNavigator()

const Router = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={LoginScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Router