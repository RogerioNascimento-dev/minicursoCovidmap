import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Home = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.textSimple}>Estou Na Home</Text>
        </View>
    )
}

export default Home;