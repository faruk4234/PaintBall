import React from 'react'

import { View, StyleSheet } from 'react-native'
import { Avatar, Button } from 'react-native-paper'

const MainPage = ({ route }) => (
    <View style={styles.container}>
        <Avatar.Text style={styles.avatarContainer} size={40} label={JSON.stringify(route.params.UserName)} />

        <Button
            style={styles.oflineButtton}
            icon='sword'
            mode='contained'
            onPress={() => console.log('Pressed')}>
            play OFFLİNE
        </Button>

        <Button
            icon='sword'
            mode='contained'
            style={styles.onlineButton}
            onPress={() => console.log('Pressed')}>

            play ONLİNE
        </Button>
    </View>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#76D7C4',
        alignItems: 'center',
        flex: 1,
        paddingTop: '10%'
    },
    avatarContainer: {
        top: '20%',
        width: '70%',
        backgroundColor: 'blue'
    },
    oflineButtton: {
        width: '40%',
        backgroundColor: 'red',
        top: '28%'
    },
    onlineButton: {
        width: '40%',
        top: '30%',
        backgroundColor: 'green'
    }
})

export default MainPage
