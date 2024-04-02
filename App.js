import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthStack from './src/Navigation/AuthStack';
import Routes from './src/Navigation/Routes';

export default function App() {
  return (
    <View style={{flex:1}}>
      <Routes />
    </View>
  );
}


