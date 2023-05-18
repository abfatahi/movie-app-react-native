import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStack, Login, ProfileStack, SettingsStack } from "./pages";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { UserProvider } from "./context/UserContext";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName=""
          screenOptions={{ activeTintColor: "#42f44b" }}
        >
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              headerShown: false,
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="ProfileStack"
            component={ProfileStack}
            options={{
              headerShown: false,
              tabBarLabel: "Profile",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="SettingsStack"
            component={SettingsStack}
            options={{
              headerShown: false,
              tabBarLabel: "Settings",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="car-settings"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Logout"
            component={HomeStack}
            options={(navigation) => ({
              headerShown: false,
              tabBarLabel: "Logout",
              tabBarLabelStyle: { color: "#dc3545" },
              tabBarIcon: ({ size }) => (
                <MaterialCommunityIcons
                  name="logout"
                  color="#dc3545"
                  size={size}
                />
              ),
              tabBarPress: () => {
                setEmail("");
                setName("");
                setIsLoggedIn(false);
                navigation.navigate();
              },
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
