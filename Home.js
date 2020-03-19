import React, { Component } from "react";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default class Home extends Component {
  triggerDeposit = () => {
    this.props.navigation.navigate("Browser", {
      url:
        "https://transact-staging.atomicfi.com/xdeposit/start/eyJwcm9kdWN0IjoieGRlcG9zaXQiLCJkZW1vTW9kZSI6InRydWUiLCJpblNkayI6InRydWUifQ=="
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("./assets/atomic-logo.png")}
        />
        <TouchableOpacity onPress={this.triggerDeposit} style={styles.button}>
          <Text style={styles.buttonText}>Launch Deposit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#4b39ef",
    flex: 1,
    justifyContent: "center"
  },
  logo: {
    height: 74,
    width: 300
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 22,
    display: "flex",
    height: 44,
    justifyContent: "center",
    marginTop: 50,
    width: 200
  },
  buttonText: {
    color: "#4b39ef"
  }
});
