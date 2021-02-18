import React from 'react';
import { StyleSheet, Image,Text, View, FlatList } from 'react-native';
import { LinearGradient,} from 'expo-linear-gradient';



const DATA = [
    {
      id: Math.random(),
      nome: "Bolo Festa | ",
      descricao: "tradicional creme| ",
      preco: "R$150,00",
     
      
    
    },
    {
      id: Math.random(),
      nome: "Bolo milho| ",
      descricao: "milho| ",
      preco: "R$80,00"
    },
    {
      id: Math.random(),
      nome: "Bolo trigo | ",
      preco: "40,00"
    },
    {
      id: Math.random(),
      nome: "bolo gelado | ",
      descricao: "cereja | ",
      preco: "R$50,00"
    },
    {
      id: Math.random(),
      nome: "Bolo natural | ",
      descricao: "banana | ",
      preco: "R$50,00"
    },
    {
      id: Math.random(),
      nome: "Bolo cenoura| ",
      descricao: "cenoura com chocolate | ",
      preco: "R$80,00"
    }
   
  ]
  
  const _renderItem = ({item}) => 
    <Text style={styles.item}>
        {item.nome}
        {item.descricao}
        {item.preco}
        {item.img}
    </Text>

  export default function Produtos() {
    return (

      
        <LinearGradient
      
        
          colors={['#eb9090', '#000']}
          
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          >
    

    <View style={styles.inputContainer}>
        
        <View>
       
          <FlatList
          data = {DATA}
          renderItem = {_renderItem}
          
          />
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
    inputContainer: {
      flex: 1,
      paddingTop: 5,
    },
    item: {
      backgroundColor: 'rgba(251, 233, 237, 0.2)',
      padding: 10,
      margin: 8,
      borderRadius: 15,
      textAlign: 'center'
    },
  });
