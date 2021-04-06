import React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from "./screens/SignUp";
import Tabs from "./navigation/Tabs";
import Verify from "./screens/Verify";

const theme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack =createStackNavigator()


const Navigation = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false

                }}
                initialRouteName={'SignUp'}
            >

                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name="Verify" component={Verify}/>

                <Stack.Screen name="Home" component={Tabs}/>


            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default Navigation;