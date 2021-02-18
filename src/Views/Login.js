import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import User from '../../assets/bolo1.png'

const DATA = [
    {
      id: Math.random(),
      nome: "Nome de usuário ou e-mail..."
    },
    {
      id: Math.random(),
      senha: "Senha..."
    }
  ]
  
  const _renderItem = ({item}) => 
    <Text style={styles.item}>
        {item.nome}
        {item.senha}
    </Text>

  export default function Login() {
    return (
        <LinearGradient
        // #eb5757', '#000
          colors={['#eb9090', '#000']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          >


  
    <View style={styles.inputContainer}>
        
    <Image style={styles.user} source={User}></Image>

        <View>
          <FlatList
          data = {DATA}
          renderItem = {_renderItem}
          />
        </View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.texto}>Entrar</Text>
        </TouchableOpacity>

        <View style={{margin:20}}>
           <Image source={require('../../assets/bolo1.png')}/>
        </View>


    </View>
      </LinearGradient>
    );
  }
  
  const styles = StyleSheet.create({
    gradient: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    user: {
        flex: 1,
        resizeMode: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        height: 90,
        width: 90
    },
    button: {
        width: 135,
        backgroundColor: '#152352',
        alignItems: 'center',
        margin: 10,
        padding: 8,
        borderRadius: 35
    },
    texto: {
        color: '#198',
        fontSize: 25
    },
    inputContainer: {
      flex: 3,
      paddingTop: 5,
      position: 'absolute',
      alignItems: 'center'
    },
    item: {
      backgroundColor: 'rgba(251, 233, 237, 0.2)',
      padding: 10,
      margin: 8,
      borderRadius: 15,
      color: 'rgba(255, 255, 255, 0.6)',
      textAlign: 'center'
    },
  });