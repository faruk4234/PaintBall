import * as React from 'react'

import { TextInput } from 'react-native-paper'

const Input = ({ name }) => {
    const [text, setText] = React.useState('')

    return (
        <TextInput
            label={JSON.stringify(name)}
            value={text}
            onChangeText={(text) => setText(text)} />
    )
}

export default Input
