import React from 'react'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import {createStackNavigator} from '@react-navigation/stack'
import PassoStack from '../passoStack/PassoStack'


const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaA"
        screenOptions={{ headerShown: true }}>

        <Stack.Screen name="TelaA" options={{ title: 'Informações Gerais' }}>
                
            {props =>(
                <PassoStack {...props} avancar="TelaB">
                    <TelaA/>
                </PassoStack>
            )}

        </Stack.Screen> 

        <Stack.Screen name="TelaB" options={{ title: 'Lista' }}>

            {props =>(
                <PassoStack {...props} avancar="TelaC" voltar>
                    <TelaB/>
                </PassoStack>
            )}

        </Stack.Screen>
            
        <Stack.Screen name="TelaC" options={{ title: 'Usuários' }}>
            
            {props =>(
                <PassoStack {...props} voltar>
                    <TelaC/>
                </PassoStack>
            )}
        </Stack.Screen>

    </Stack.Navigator>
)