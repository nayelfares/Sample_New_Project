import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import Screen from './app/screens/Screen';
import WelcomeScreen from './app/screens/WelcomeScreen';




function  App()  {


  return (
    <Screen style={styles.backgroundStyle}>
        <WelcomeScreen/>
      </Screen>
  );
};

const styles = StyleSheet.create({
  backgroundStyle : {
    flex : 1,
  }
});

export default App;
