import React from 'react'
import { View,  } from 'react-native'

import TextCenter from '../components/TextCenter'

import User from '../../assets/bolo1.png'

const Home = (props) => {
    return (
        <View style={{flex: 1}}>
            <TextCenter text="Bem vindo(a) a nossa loja!" />
        </View>

    )
}

export default Home
