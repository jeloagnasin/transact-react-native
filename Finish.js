import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default class Finish extends Component {
  goHome = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      // <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity onPress={this.goHome} style={styles.finish}>
          <Image style={styles.finish} source={require("./assets/done.png")} />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "#0041C4",
    marginHorizontal: 0,
    marginStart: 0,
  },
  finish: {
    height: 812,
    flex: 1,
    width: null,
  },
});
