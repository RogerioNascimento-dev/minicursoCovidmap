import React, { useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity}  from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Mapview,{Marker, Callout} from 'react-native-maps';
import {currentPositionCountry} from '../../commons/cordinates';
import {FontAwesome} from '@expo/vector-icons';




const Home = () =>{

const navigation = useNavigation();
const [textFilter, setTextFilter] = useState('');


const hangleButtonFilter = () =>{
    alert('Cliquei');
}
    return(
        <>      

        <Mapview           
        initialRegion={currentPositionCountry}    
        style={styles.map} >
        
            <Marker coordinate={{latitude:-8.77,longitude:-70.55}} >
                <Image
                    style={styles.marker}
                 source={{uri:`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/AC.png`}} />

                 <Callout onPress={() =>{navigation.navigate('Single',{uf:'BA'})}}>                 
                    <View style={styles.callout}>
                        <Text style={styles.stateName}>Acre</Text>
                        <Text style={styles.cases}>9999 Casos confirmados</Text>
                        <Text style={styles.cases}>899 Óbitos confirmados</Text>
                        <View style={styles.botton}>
                            <Text style={styles.cases}>Saiba Mais </Text>
                            <FontAwesome name="arrow-right" size={15} color="red" />
                        </View>  
                    </View>
                 </Callout>
            </Marker>        
        </Mapview>

        <View style={styles.containerFilter}>
            <TextInput
            style={styles.inputFilter}
                placeholder="Filtrar Ex: BA, SP, AC"
                placeholderTextColor="#FFB0B5"
                autoCapitalize="characters"
                autoCorrect={false}
                value={textFilter}
                onChangeText={(value) => setTextFilter(value)}
                returnKeyType="search"
                onSubmitEditing={hangleButtonFilter}
            />
            <TouchableOpacity onPress={hangleButtonFilter} style={styles.bottonFilter}>
                    <FontAwesome  color="red" size={20} name="filter" />
            </TouchableOpacity>
        </View>
    </>
    )
}

export default Home;