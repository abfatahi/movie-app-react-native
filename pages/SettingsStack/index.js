import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Security } from "./Security/Security";
import { Subscription } from "./Subscription/Subscription";
import { Settings } from "./Settings/Settings";

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: "#007bff" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Settings" }}
      />
      <Stack.Screen
        name="Security"
        component={Security}
        options={{ title: "Security" }}
      />
      <Stack.Screen
        name="Subscription"
        component={Subscription}
        options={{ title: "Subscription" }}
      />
    </Stack.Navigator>
  );
};

export { SettingsStack };
