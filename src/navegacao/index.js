import React, { Component } from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import Stack from './Stack'
import Tab from './Tab'

export default props => (
    
    <SafeAreaView style={{flex:1 }}>
        <NavigationContainer>
            <Tab/>
            {/* <Stack/> */}
        </NavigationContainer>
    </SafeAreaView>
    
)

 
