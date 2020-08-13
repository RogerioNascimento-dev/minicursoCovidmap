import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    map:{
        flex:1,       
    },
    marker:{
        width: 45,
        height: 30,
    },
    callout:{
        width: 250,
    },
    stateName:{
        color:'#ff101F',
        fontWeight:'bold',
        fontSize:18
    },
    cases:{
        fontSize:15,
        fontWeight:'bold',
        color:'#9fb5c8',
        marginRight:5,
    },
    botton:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center'
    },
    inputFilter:{
        backgroundColor:'#FFF',
        height:40,
        width: Dimensions.get('window').width * 0.6,
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:'#FFB0B5',
        borderRadius:20,

    },
    containerFilter:{
        flexDirection:'row',
        position:'absolute',
        bottom:20,
        alignItems:'center',
        left: Dimensions.get('window').width * 0.14
    },
    bottonFilter:{
        backgroundColor:'#FFF',
        borderColor:'#FFB0B5',
        borderWidth:1,
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        marginLeft:10,
    }

    
});

export default styles;