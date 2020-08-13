import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Image} from 'react-native';
import logo from '../assets/logoApp.png';
import List from '../pages/List';
import Single from '../pages/Single';


const Stack = createStackNavigator();


const headerImg  = {
    headerTitle:(<Image source={logo} />)
}

const StateList = () =>{    
    return(
        <Stack.Navigator screenOptions={{
            headerTintColor:'white',
            headerStyle:{backgroundColor:'#FF101F'},
            headerTitleStyle:{height:45},
            headerTitleAlign:'center',
        }}>
            <Stack.Screen name="List" options={headerImg} component={List} />
            <Stack.Screen name="Single" options={headerImg} component={Single} />
        </Stack.Navigator>
    );
}

export default StateList;

