import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppBottom from './src/routes/Botton.routes';


export default function App() {
  return (
    
    <NavigationContainer>
      <StatusBar backgroundColor="#FF0011" />      
      <AppBottom />  
    </NavigationContainer>
    
  );
}

