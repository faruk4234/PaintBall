import React from 'react'

import {
    Animated, View, StyleSheet, PanResponder, Text
} from 'react-native'

const PlayingScreen = () => {
    const pan = React.useRef(new Animated.ValueXY()).current
    const panResponder = React.useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([
                null,
                { dx: pan.x, dy: pan.y }
            ]),
            onPanResponderRelease: () => {
                Animated.spring(pan, { toValue: { x: 100, y: 100 } }).start()
            }
        })
    ).current

    return (
        <View style={stlyes.container}>
            <View style={stlyes.childContainer}>
                <Animated.View
                    style={{
                        transform: [{ translateX: pan.x }, { translateY: pan.y }]
                    }}
                    {...panResponder.panHandlers}>
                    <View style={stlyes.box} />
                </Animated.View>
            </View>
        </View>
    )
}

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
    },
    box: {
        height: 15,
        width: 15,
        backgroundColor: 'blue',
        borderRadius: 50
    }
})

export default PlayingScreen
