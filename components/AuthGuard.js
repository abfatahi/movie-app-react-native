import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../pages";

import { UserContext } from "../context/UserContext";

const AuthGuard = ({ route }) => {
  const Stack = createNativeStackNavigator();

  const { isLoggedIn } = useContext(UserContext);
  const { screenName, component: ScreenComponent } = route.params;

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen name={screenName} component={ScreenComponent} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default AuthGuard;
