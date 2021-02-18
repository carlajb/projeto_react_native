import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const TextCenter = ({text}) => {
    return (
        <View style={css.container}>
            <Text style={css.text}>
                {text}
            </Text>
        </View>
    )
}

export default TextCenter

const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#800080',
        width: 390,
        paddingHorizontal: 10
    },
    text: {
        color: '#fff',
        fontSize: 30,
    }
})