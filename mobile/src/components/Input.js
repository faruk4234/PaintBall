import * as React from 'react'

import { TextInput } from 'react-native-paper'

const Input = ({ name, text, setText }) => (
    <TextInput
        label={JSON.stringify(name)}
        value={text}
        onChangeText={(text) => setText(text)} />
)

export default Input
