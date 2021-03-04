import React from 'react'

import { View, StyleSheet } from 'react-native'
import { IconButton, Colors } from 'react-native-paper'

import Input from '../../components/Input'

const LoginScreen = ({ navigation }) => {
    const fight = (UserName) => {
        navigation.replace('main', { UserName })
    }
    const [text, setText] = React.useState('')

    return (
        <View style={styles.container}>
            <Input
                name='Your Name'
                text={text}
                setText={setText} />

            <IconButton
                style={styles.iconContainer}
                icon='sword'
                color={Colors.blue700}
                size={60}
                onPress={() => { fight(text) }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#76D7C4',
        alignItems: 'center',
        flex: 1,
        paddingTop: '10%'
    },
    iconContainer: {
        top: '6%'
    }
})

export default LoginScreen
