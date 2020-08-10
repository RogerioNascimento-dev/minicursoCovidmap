import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './src/pages/Home';
import Single from './src/pages/Single';
import List from './src/pages/List';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#FF0011" />
      <List />  
    </>    
  );
}

