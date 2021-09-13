import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
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
      <ScrollView style={styles.scrollView}>
        <Image style={styles.top} source={require("./assets/top-341.png")} />
        <TouchableOpacity onPress={this.triggerTransact} style={styles.middle}>
          <Image
            style={styles.middle}
            source={require("./assets/middle-161.png")}
          />
        </TouchableOpacity>
        <Image
          style={styles.bottom}
          source={require("./assets/bottom-994.png")}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 0,
    marginStart: 0,
  },
  text: {
    fontSize: 42,
  },
  top: {
    height: 284,
    flex: 1,
    width: null,
  },
  middle: {
    height: 161,
    flex: 1,
    width: null,
  },
  bottom: {
    height: 994,
    flex: 1,
    width: null,
  },
});
