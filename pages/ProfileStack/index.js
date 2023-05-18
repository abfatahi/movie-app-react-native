import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Profile } from "./Profile/Profile";
import { History } from "./History/History";
import { Favorites } from "./Favorites/Favorites";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: "#007bff" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{ title: "History" }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ title: "Favorites" }}
      />
    </Stack.Navigator>
  );
};

export { ProfileStack };
