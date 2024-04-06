import React, { useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import navigationStrings from "../../Constans/navigationStrings";
import styles from "./styles";

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate(navigationStrings.LOGIN);
    });
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <View>
          <Text style={styles.logoText}>
            <Text style={styles.largeText}>Bible S</Text>
            <Text style={styles.redText}>t</Text>
            <Text style={styles.largeText}>udy</Text>
          </Text>
        </View>
        <View>
          <Text style={styles.withPastor}>with Pastor Ronnie</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
