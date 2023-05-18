import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Security } from "./Security/Security";
import { Subscription } from "./Subscription/Subscription";
import { Settings } from "./Settings/Settings";
import { Login } from "../Auth/Login";

import { UserContext } from "../../context/UserContext";

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  const { isLoggedIn } = useContext(UserContext);
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
      {isLoggedIn ? (
        <>
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
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
      )}
    </Stack.Navigator>
  );
};

export { SettingsStack };
