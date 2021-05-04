import React from 'react'

import {
    View, StyleSheet,
    TouchableOpacity
} from 'react-native'

const PlayingScreen = () => {
    const [blue, setBlue] = React.useState(50)
    const [red, setRed] = React.useState(50)

    const settingArea = (clickAreaColor) => {
        if (clickAreaColor === 'blue') {
            if (red > 17) {
                // eslint-disable-next-line no-unused-expressions
                setBlue(blue + 2),
                setRed(red - 2)
            }
        } else if (blue > 17) {
            // eslint-disable-next-line no-unused-expressions
            setBlue(blue - 2),
            setRed(red + 2)
        }
    }

    return (
        <>
            <View style={stlyes.container}>
                <TouchableOpacity
                    onPressIn={{}}
                    activeOpacity={{ backgroundColor: 'green' }}
                    onPress={() => settingArea('red')}
                    style={{ ...stlyes.childContainer, flex: red }} />

                <TouchableOpacity
                    onPress={() => settingArea('blue')}
                    style={{ ...stlyes.childContainer2, flex: blue }} />
            </View>
        </>

    )
}

const stlyes = StyleSheet.create({
    container: {
        flex: 1
    },
    childContainer: {
        width: '100%',
        height: '50%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: 'red'
    },
    childContainer2: {
        width: '100%',
        height: '50%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: 'aqua'
    }
})

export default PlayingScreen
