import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../Constans/navigationStrings";
import Login from "../Screens/Login/Login";
import SignUp from "../Screens/SignUp/SignUp";
import ForgetPassword from "../Screens/ForgetPassword/ForgetPassword";
import Home from "../Screens/Home/Home";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={SignUp} />
      <Stack.Screen name={navigationStrings.FORGETPASSWORD} component={ForgetPassword} />

      <Stack.Screen name={navigationStrings.HOME} component={Home} />
    </Stack.Navigator>
  );
}
