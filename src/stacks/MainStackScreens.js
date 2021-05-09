import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import MessageScreen from "../screens/MessageScreen";
import PostScreen from "../screens/PostScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";

export default MainStackScreens = () => {
  const MainStack = createBottomTabNavigator();

  const tabBarOptions = {
    showLabel: false,
    style: {
      backgroundColor: "#222222",
      paddingBototm: 12,
    },
  };

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let iconName = "ios-home";

      switch (route.name) {
        case "Home":
          iconName = "ios-home";
          break;

        case "Message":
          iconName = "ios-chatbox";
          break;

        case "Notification":
          iconName = "ios-notifications";
          break;

        case "Profile":
          iconName = "ios-person";
          break;

        default:
          iconName = "ios-home";
      }

      if (route.name === "Post") {
        return (
          <Ionicons
            name="ios-add-circle"
            size={48}
            color="#23a8d9"
            style={{
              shadowColor: "#23a8d9",
              shadowOffset: { width: 0, height: 10 },
              shadowRadius: 10,
              shadowOpacity: 0.3,
            }}
          />
        );
      }

      return <Ionicons name={iconName} size={24} color={focused ? "#ffffff" : "#666666"} />;
    },
  });

  return (
    <MainStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Message" component={MessageScreen} />
      <MainStack.Screen name="Post" component={PostScreen} />
      <MainStack.Screen name="Notification" component={NotificationScreen} />
      <MainStack.Screen name="Profile" component={ProfileScreen} />
    </MainStack.Navigator>
  );
};
