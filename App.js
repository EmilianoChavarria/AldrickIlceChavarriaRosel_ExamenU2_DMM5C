import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./screens/Splash";
import BotNav from "./screens/bottomtab"; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShow: false }}>
        <Stack.Screen name="Splash" component={Splash} Options={{ headerShow: false }} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} Options={{ headerShow: false }} />
        <Stack.Screen name="BottomTab" component={BotNav} Options={{ headerShow: false }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;