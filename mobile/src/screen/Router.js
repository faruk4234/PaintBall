import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from './LoginScreen/LoginScreen'
import MainPage from './MainPage/MainPage'
import PlayingScreen from './PlayScreen/PlayingScreen'

const Stack = createStackNavigator()

const Router = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Play'>
            <Stack.Screen name='LOGİN' component={LoginScreen} />
            <Stack.Screen name='main' component={MainPage} />
            <Stack.Screen options={{ headerShown: false }} name='Play' component={PlayingScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Router
