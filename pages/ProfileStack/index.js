import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Profile } from "./Profile/Profile";
import { History } from "./History/History";
import { Favorites } from "./Favorites/Favorites";
import { Login } from "../Auth/Login";

import { UserContext } from "../../context/UserContext";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  const { isLoggedIn } = useContext(UserContext);
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
      {isLoggedIn ? (
        <>
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

export { ProfileStack };
