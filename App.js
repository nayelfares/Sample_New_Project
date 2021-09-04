import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import Screen from './app/Screen';




function  App()  {


  return (
    <Screen style={styles.backgroundStyle}>

      </Screen>
  );
};

const styles = StyleSheet.create({
  backgroundStyle : {
    flex : 1,
    backgroundColor : 'red',
  }
});

export default App;
