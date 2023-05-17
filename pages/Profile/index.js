import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Profile } from "./Profile/Profile";
import { Settings } from "./Settings/Settings";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
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
        name={"Settings"}
        component={Settings}
        options={{ title: "Settings" }}
      />
    </Stack.Navigator>
  );
};

export { ProfileStack };
