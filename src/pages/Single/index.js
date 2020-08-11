import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles';


const Single = ({route}) =>{
    const {uf} = route.params;
    console.log(uf);
    return(
        <View style={styles.container}>
            <Text>Estou na single</Text>
        </View>
    )
}
export default Single;