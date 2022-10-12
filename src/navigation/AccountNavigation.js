import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screen
import AccountScreen from "../screens/Account";

const Stack = createStackNavigator();

const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "Mi Cuenta" }}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigation;
