import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons';
import MapStack from './Map.routes';
import StateList from './StateList.routes';


const Bottom = createBottomTabNavigator();

const AppBottom = () =>{
    return(
        <Bottom.Navigator 
        
            screenOptions={({route}) =>({
                tabBarIcon:({focused, color}) =>{                
                let iconRoute;
                if(route.name === 'Home'){
                    iconRoute = focused ? <MaterialCommunityIcons name="map-marker-check" size={24} color={color} />:<MaterialCommunityIcons name="map-marker-outline" color={color} size={24} />
                }else if(route.name === 'List'){
                    iconRoute  = focused ? <FontAwesome name="flag" size={24} color={color} />: <FontAwesome name="flag-o" size={24} color={color} />
                }
                    return iconRoute;
                }            
            })}
            tabBarOptions={{
                activeTintColor:'#FF101F',
                inactiveTintColor:'#FFB0B5'
            }}
        >
            <Bottom.Screen  name="Home" component={MapStack} />
            <Bottom.Screen  name="List" component={StateList} />
        </Bottom.Navigator>
    );
}

export default AppBottom;