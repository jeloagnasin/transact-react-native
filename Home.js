import React, { Component } from "react";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { encode as btoa } from "base-64";

export default class Home extends Component {
  triggerDeposit = () => {
    // Deposit uses a Base64 encoded string to accept attributes
    const payload = btoa(
      JSON.stringify({
        // Add the server-side generated `publicToken`
        token: "",
        // Could be either 'xbalance' or 'xdeposit'
        product: "",
        demoMode: true,
        // Optionally theme Transact with a *dark* color
        color: "#4B39EF"
      })
    );

    this.props.navigation.navigate("Browser", {
      url: `https://transact.atomicfi.com/xdeposit/start/${payload}`
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
    backgroundColor: "#000023",
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
    color: "#000023"
  }
});
