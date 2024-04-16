import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import { logout } from "../../api/LogOutApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import navigationStrings from "../../Constans/navigationStrings";

const Home = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await logout();
      navigation.navigate(navigationStrings.LOGIN);
    } catch (error) {
      console.error("Error handling logout:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Home Page coming soon ...</Text>
      <View style={styles.buttonContainer}>
        <Button title="Log out" onPress={handleLogout} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Arrange children with equal space between them
    alignItems: "center", // Center items horizontally
    padding: 20,
  },
  homeText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    top: 320,
    alignSelf: "stretch", // Make the container take the full width
  },
});
