import React from 'react'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            switch (route.name) {
                case 'TelaA':
                    iconName = focused
                        ? 'home-sharp'
                        : 'home-outline';
                    break

                case 'TelaB':
                    iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                    break

                case 'TelaC':
                    iconName = focused
                        ? 'person-circle-sharp'
                        : 'person-circle-outline';
                    break
            }
                
            return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}   
    
        tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'grey',
            labelStyle: {fontSize: 15}}} 
            
        initialRouteName="TelaA"
    >

        <Tab.Screen name="TelaA" component={TelaA}
            options={{title:'Home'}}/> 

        <Tab.Screen name="TelaB" component={TelaB}
            options={{title:'Info'}}/>
            
        <Tab.Screen name="TelaC" component={TelaC}
            options={{title:'User'}}/>

    </Tab.Navigator>
)