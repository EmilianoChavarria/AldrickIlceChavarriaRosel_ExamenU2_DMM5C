import React from "react";
import {View, StyleSheet, TextInput, Touchable, TouchableOpacity} from "react-native";
import {Image} from "@rneui/base";
import { AntDesign } from '@expo/vector-icons';

const Search = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TouchableOpacity>
                    <AntDesign name="search1" size={24} color="white" />
                </TouchableOpacity>
                <TextInput placeholder='gray' style={{ fontSize: 20, color: 'white', backgroundColor:'gray',marginLeft:10,width:300, borderRadius:5 }} />
            </View>
            <View style={styles.busquedas}>
                <Image style={{width:100, height:100, borderRadius:5}} source={require('../assets/images/pato.jpg')}/>
                <Image style={{width:100, height:100, borderRadius:5}} source={require('../assets/images/chava.jpg')}/>
                <Image style={{width:100, height:100, borderRadius:5}} source={require('../assets/images/liam.jpg')}/>
            </View>
            <View style={styles.busquedasDos}>
            <Image style={{width:100, height:100, borderRadius:5}} source={require('../assets/images/pato.jpg')}/>
                <Image style={{width:100, height:100, borderRadius:5}} source={require('../assets/images/chava.jpg')}/>
                <Image style={{width:100, height:100, borderRadius:5}} source={require('../assets/images/liam.jpg')}/>
            </View>
            <View style={styles.busquedasDos}>
            <Image style={{width:100, height:100, borderRadius:5}} source={require('../assets/images/pato.jpg')}/>
                <Image style={{width:100, height:100, borderRadius:5}} source={require('../assets/images/chava.jpg')}/>
                <Image style={{width:100, height:100, borderRadius:5}} source={require('../assets/images/liam.jpg')}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
       justifyContent:'flex-start',
        padding: 20,
        backgroundColor: 'black'
    },
    busquedas:{
        justifyContent:'space-between',
        paddingHorizontal:0,
        backgroundColor: 'blue',
        width:340,
        height:100,
        alignItems:'center',
        flexDirection:"row",
        marginTop:80,
        marginBottom:30
    },
    busquedasDos:{
        justifyContent:'space-between',
        paddingHorizontal:0,
        backgroundColor: 'blue',
        width:340,
        height:100,
        alignItems:'center',
        flexDirection:"row",

    },
    imges:{
        width:100,
        height:100,
        borderRadius:5
    },
    searchBar:{
        width:320,
        marginTop:60,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',

    }
});

export default Search;