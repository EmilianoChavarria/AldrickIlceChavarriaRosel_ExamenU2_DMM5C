import { StyleSheet, SectionList, StatusBar, View, Text, Image, ScrollView, Modal } from "react-native";
import { useState } from 'react';

const Home = () => {
    const [modal, setModalVisible] = useState(false);

    const post = [
        {
            image: require("../assets/images/chava.jpg"),
            description: "Descripción del primer objeto",
            liked: true,
            likes: 0,
            username: "Bob",
            userImage: require("../assets/images/pato.jpg")
        },
        {
            image: require("../assets/images/harra.jpg"),
            description: "Descripción del segundo objeto",
            liked: true,
            likes: 0,
            username: "Cartoon",
            userImage: require("../assets/images/mewtwo.jpg")
        },
        {
            image: require("../assets/images/liam.jpg"),
            description: "Descripción del tercer objeto",
            liked: true,
            likes: 0,
            username: "Gato Chilón: ",
            userImage: require("../assets/images/niall.jpg")
        },

    ];
    const abrirModal = () => {
        setModalVisible(true);
    }
    return (
        <View style={{ backgroundColor: 'black' }}>
            <View>
                <View style={styles.container1}>
                    <Image style={styles.profilePhoto1} source={require("../assets/images/niall.jpg")} onLongPress={() => abrirModal()} onPressOut={() => setModalVisible(false)} />
                    <Image style={styles.profilePhoto1} source={require("../assets/images/niall.jpg")} onLongPress={() => abrirModal()} onPressOut={() => setModalVisible(false)} />
                    <Image style={styles.profilePhoto1} source={require("../assets/images/niall.jpg")} onLongPress={() => abrirModal()} onPressOut={() => setModalVisible(false)} />
                    <Image style={styles.profilePhoto1} source={require("../assets/images/niall.jpg")} onLongPress={() => abrirModal()} onPressOut={() => setModalVisible(false)} />
                    <Image style={styles.profilePhoto1} source={require("../assets/images/niall.jpg")} onLongPress={() => abrirModal()} onPressOut={() => setModalVisible(false)} />
                </View>
                <SectionList
                    sections={[{ title: "Posts", data: post }]}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <View style={styles.cardPost}>
                            <View style={styles.userInfo}>
                                <Image style={styles.profilePhoto} source={item.userImage} />
                                <Text style={styles.username}>{item.username}</Text>
                            </View>
                            <View>
                                <Image style={styles.postImage} source={item.image} />
                            </View>
                            <View style={styles.icons}>
                                <Text style={{ fontSize: 15, justifyContent: 'center', alignSelf: 'center', color: "white" }} >
                                    {item.likes} Personas le gusta
                                </Text>
                            </View>
                            <View style={styles.description}>
                                <Text style={{ fontSize: 15, justifyContent: 'center', alignSelf: 'center', color: "white" }} >
                                    {item.username}
                                </Text>
                                <Text style={{ fontSize: 15, justifyContent: 'center', alignSelf: 'center', color: "white" }} >
                                    {item.description}
                                </Text>
                            </View>
                        </View>
                    )} />
            </View>
            <StatusBar barStyle={"light-content"} backgroundColor={"#089779"} />
            <Modal animationType='fade' transparent={true} visible={modal}>
                <View style={styles.modalView}>
                    <Image style={styles.image} source={require("../assets/images/niall.jpg")}></Image>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    image: {
        height: 150,
        width: 150,
        marginBottom: 30,
      },
    container1: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 80
    },
    modalView: {

        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginTop: 3
    },
    cardPost: {
        flex: 1,
        margin: 10,
        backgroundColor: "black",
        width: 'auto',
        height: 'auto',
    },
    profilePhoto: {
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 5
    },
    profilePhoto1: {
        height: 70,
        width: 70,
        borderRadius: 40,
        margin: 5
    },
    username: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 3
    },
    postImage: {
        width: 400,
        height: 200,
    },
    description: {
        flexDirection: 'row',
        marginBottom: 5,
        marginLeft: 3,
        marginTop: 3,
        alignSelf: 'flex-start',
        justifyContent: 'center'
    }
});

export default Home;
