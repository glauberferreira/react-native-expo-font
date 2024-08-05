import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Inter_900Black } from '@expo-google-fonts/inter';
import { LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Inter_900Black,
    LeckerliOne_400Regular,
    Montserrat_700Bold,
    'JejuGothic-Regular' : require('./assets/fonts/JejuGothic-Regular.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={{fontFamily: 'Inter_900Black'}}>Open up App.js to start working on your app!</Text>
      <Text style={{fontFamily: 'LeckerliOne_400Regular'}}>Open up App.js to start working on your app!</Text>
      <Text style={{fontFamily: 'Montserrat_700Bold'}}>Open up App.js to start working on your app!</Text>
      <Text style={{fontFamily: 'JejuGothic-Regular'}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
