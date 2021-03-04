import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

const PlayingScreen = () => (
    <View style={stlyes.container}>
        <View style={stlyes.childContainer}>
            <Text>
                TRYsssssssssssss
            </Text>
        </View>
    </View>
)

const stlyes = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex: 1
    },
    childContainer: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        bottom: '3%',
        top: '3%',
        backgroundColor: '#76D7C4',
        alignItems: 'center',
        height: '95%',
        width: '98%',
        left: '1%'
    }
})

export default PlayingScreen
