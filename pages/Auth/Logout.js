// import { useContext } from "react";
// import { UserContext } from "../../context/UserContext";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { HomeStack } from "../HomeStack";

// const Tab = createBottomTabNavigator();

// const LogoutTab = ({ navigation }) => {
//   const { setIsLoggedIn, setName, setEmail } = useContext(UserContext);

//   const handleLogout = () => {
//     setEmail("");
//     setName("");
//     setIsLoggedIn(false);
//     navigation.navigate("Home");
//   };

//   return (
//     <Tab.Screen
//       name="Home"
//       component={HomeStack}
//       options={{
//         headerShown: false,
//         tabBarLabel: "Logout",
//         tabBarLabelStyle: { color: "#dc3545" },
//         tabBarIcon: ({ size }) => (
//           <MaterialCommunityIcons name="logout" color="#dc3545" size={size} />
//         ),
//         tabBarPress: handleLogout,
//       }}
//     />
//   );
// };

// export { LogoutTab };
