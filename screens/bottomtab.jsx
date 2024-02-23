import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native";

import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import Home from "./Home";
import  Search  from "./Search";
import Profile from "./Profile";


const Tab = createBottomTabNavigator();
const BotNav = () => {

    return (
        <Tab.Navigator initialRouteName="Home">

            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: "Home",
                headerShown: false,
                tabBarActiveTintColor: '#089779',
                tabBarActiveTintColor: '#002e60',
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                )
            }}></Tab.Screen>

            <Tab.Screen name="Search" component={Search}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#089779',
                    tabBarActiveTintColor: '#002e60',
                    tabBarLabelStyle: { fontSize: 15 },
                    // tabBarIcon: ({ size, color }) => (
                    //     <MaterialIcons name="file-find-outline" color={color} size={size} />
                    // )
                }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarLabel: "Perfl",
                headerShown: false,
                tabBarActiveTintColor: '#089779',
                tabBarActiveTintColor: '#002e60',
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name="face-man-profile" color={color} size={size} />
                )
            }}></Tab.Screen>
        </Tab.Navigator>


    )

}

export default BotNav;