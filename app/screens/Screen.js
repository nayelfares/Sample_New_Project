import React from "react";
import { StatusBar ,View} from "react-native";

import {
    SafeAreaView,
    StyleSheet
  } from 'react-native';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});

export default Screen;
