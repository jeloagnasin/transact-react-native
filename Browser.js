import React, { Component } from "react";
import { Linking, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { decode as atob } from "base-64";

export default class Browser extends Component {
  receiveEvent = (event) => {
    // React Native uses window.ReactNativeWebView.postMessage to pass data from
    // the webview to React Native. Window.ReactNativeWebView.postMessage only accepts
    // a string. In order to pass additional data, the event is Base64 encoded.

    // Deposit will broadcast three types of events:
    // 1) 'atomic-transact-close' : Broadcast when exiting the app
    // 2) 'atomic-transact-finish' : Broadcast when the user finished the transaction
    // 3) 'atomic-transact-open-url' : Broadcast when an external url is being triggered
    let obj = atob(event);
    let data = JSON.parse(obj);
    if (data.event == "atomic-transact-close") {
      this.props.navigation.goBack();
    } else if (data.event == "atomic-transact-finish") {
      this.props.navigation.goBack();
    } else if (data.event == "atomic-transact-open-url") {
      Linking.openURL(data.payload.url);
    } else if (data.event == "atomic-transact-interaction") {
      console.log("brennen", data);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{
            uri: this.props.route.params.url,
          }}
          onMessage={(event) => this.receiveEvent(event.nativeEvent.data)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
