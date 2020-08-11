import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Home = () =>{
const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.textSimple}>Estou Na Home</Text>
            <Button title="Navegar" onPress={() => navigation.navigate('Single',{uf:"BA"}) } />
        </View>
    )
}

export default Home;