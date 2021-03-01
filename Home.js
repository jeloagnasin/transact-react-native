import React, { Component } from "react";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { encode as btoa } from "base-64";

export default class Home extends Component {
  triggerTransact = () => {
    // Deposit uses a Base64 encoded string to accept attributes
    const payload = btoa(
      JSON.stringify({
        // Add the server-side generated `publicToken`
        publicToken: "e886cc82-6636-49c2-b30f-1bb2f7d17cf6",
        // Could be either 'balance' or 'deposit'
        product: "deposit",
        demoMode: true,
        // Optionally theme Transact with a *dark* color
        theme: {
          brandColor: "#1b1464",
        },
        inSdk: true,
      })
    );

    this.props.navigation.navigate("Browser", {
      url: `https://transact.atomicfi.com/initialize/${payload}`,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("./assets/atomic-logo.png")}
        />
        <TouchableOpacity onPress={this.triggerTransact} style={styles.button}>
          <Text style={styles.buttonText}>Launch Transact</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#000023",
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    height: 95,
    width: 300,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 22,
    display: "flex",
    height: 44,
    justifyContent: "center",
    marginTop: 50,
    width: 200,
  },
  buttonText: {
    color: "#000023",
  },
});
