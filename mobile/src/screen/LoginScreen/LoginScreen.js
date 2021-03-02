import React from 'react'

import { View, StyleSheet } from 'react-native'

import Input from '../../components/Input'

const [text, setText] = React.useState('')

const LoginScreen = () => {
    <View style={styles.container}>
        <Input
            name='Your Name'
            text={text}
            setText={setText} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#76D7C4'
    }
})

export default LoginScreen
