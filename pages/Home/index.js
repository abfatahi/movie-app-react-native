import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./Home";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#007bff" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home Page" }}
      />
    </Stack.Navigator>
  );
};

export { HomeStack };
