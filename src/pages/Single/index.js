import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles';


const Single = ({route}) =>{
    const {uf} = route.params;  
    
    return(
        <View style={styles.container}>
            <Text>Estou na single {uf}</Text>
        </View>
    )
}
export default Single;