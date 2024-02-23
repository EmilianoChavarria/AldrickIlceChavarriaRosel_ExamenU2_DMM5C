import { Text, View, StyleSheet, Image } from 'react-native'

const Profile = () => {
    return (
        <View>
            <View style={styles.container1}>
                    <Image style={styles.profilePhoto1} source={require("../assets/images/niall.jpg")} onLongPress={() => abrirModal()} onPressOut={() => setModalVisible(false)} />
                    <Image style={styles.profilePhoto1} source={require("../assets/images/niall.jpg")} onLongPress={() => abrirModal()} onPressOut={() => setModalVisible(false)} />
                    <Image style={styles.profilePhoto1} source={require("../assets/images/niall.jpg")} onLongPress={() => abrirModal()} onPressOut={() => setModalVisible(false)} />
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
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
       justifyContent:'flex-start',
        padding: 20,
        backgroundColor: 'black'
    },profilePhoto1: {
        height: 70,
        width: 70,
        borderRadius: 40,
        margin: 5
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 80,
        marginTop: 80
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

export default Profile;
