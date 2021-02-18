import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../Views/Home'
import Login from '../Views/Login'
import Produtos from '../Views/Produtos'


const routeTab = createBottomTabNavigator()


const Tab = () => {
    return (
        <routeTab.Navigator initialRouteName='Home' tabBarOptions={{
            activeTintColor: 'green',
            inactiveTintColor: 'fuchsia',
            labelStyle: {fontSize: 25},
            style: {backgroundColor: '#126', position: 'absolute', paddingBottom: 10}
        }}>
            <routeTab.Screen name="Home" component={Home}/>
            <routeTab.Screen name="Login" component={Login}/>
            <routeTab.Screen name="Produtos" component={Produtos}/>
         
        </routeTab.Navigator>
    )
}

export default Tab