import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';

import Home from '../pages/Home';
import Single from '../pages/Single';
import logo from '../assets/logoApp.png';

const Stack = createStackNavigator();
const headerImg  = {
    headerTitle:(<Image source={logo} />)
}


const MapStack = () =>{
    return(
        <Stack.Navigator screenOptions={{
            headerTintColor:'white',
            headerStyle:{backgroundColor:'#FF101F'},
            headerTitleStyle:{height:45},
            headerTitleAlign:'center',
        }}>            
            <Stack.Screen name="Home" options={headerImg} component={Home} />                   
            <Stack.Screen name="Single" options={headerImg} component={Single} />
        </Stack.Navigator>
    );
}

export default MapStack;