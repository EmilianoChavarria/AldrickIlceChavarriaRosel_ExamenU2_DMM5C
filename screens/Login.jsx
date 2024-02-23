import { useNavigation } from '@react-navigation/native';
import { Card, Image, Button } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';


const Login = () => {

    const navigation = useNavigation();

    let [userName, setUserName] = useState('');
    let [pass, setUserPassword] = useState('');

    const validUser = {
        user: 'Asd',
        password: '123'
    }

    let intentos = 0;

    const validateUser = () => {
        if (intentos > 3) {
            Alert.alert('Demasiados intentos',
                `Usuario bloqueado por 30 minutos`,
                [
                    {
                        text: 'Ok'
                    }
                ]);
        } else {
            if (userName === validUser.user
                && pass === validUser.password) {
                navigation.replace('BottomTab');
            } else {
                Alert.alert('Usuario incorrecto',
                    `Tienes ${3 - intentos} intentos restantes `,
                    [
                        {
                            text: 'Ok', onPress: () => {
                                intentos++;
                            }
                        }
                    ]);
            }
        }
    }

    return (
        <View style={styles.container}>
            <Card>
                <Card.Title>Iniciar sesión</Card.Title>
                <Card.Divider />
                <Image
                    style={styles.circulo}
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png'
                    }} />
                <TextInput
                    value={userName}
                    onChangeText={setUserName}
                    style={styles.texto}
                    placeholder='Usuario' />
                <TextInput
                    value={pass}
                    onChangeText={setUserPassword}
                    style={styles.texto}
                    placeholder='Contraseña' />
                <Button
                    title={'Iniciar sesión'}
                    color={'#009475'}
                    onPress={validateUser} />

            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    circulo: {
        height: 200,
        width: 200,
        borderRadius: 100,
        margin: 20,
        resizeMode:'contain'
    },
    texto: {
        fontSize: 15,
        margin: 20
    }
})

export default Login;