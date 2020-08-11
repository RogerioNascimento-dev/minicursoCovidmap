import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapStack from './Map.routes';


const Bottom = createBottomTabNavigator();

const AppBottom = () =>{
    return(
        <Bottom.Navigator>
            <Bottom.Screen  name="Home" component={MapStack} />
        </Bottom.Navigator>
    );
}


export default AppBottom;