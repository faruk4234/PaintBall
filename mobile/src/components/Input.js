import * as React from 'react'

import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'

const Input = ({ name, text, setText }) => (
    <TextInput
        label={JSON.stringify(name)}
        mode='outlined'
        style={styles.container}
        value={text}
        onChangeText={(text) => setText(text)} />
)

const styles = StyleSheet.create({
    container: {
        height: '10%',
        width: '80%'
    }
})

export default Input
