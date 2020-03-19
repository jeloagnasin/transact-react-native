import React, { Component } from "react";
import { Alert, StyleSheet, View, Text, StatusBar } from "react-native";
import { WebView } from "react-native-webview";

const patchPostMessageFunction = function() {
  window.ReactNativeWebView.postMessage("Hello!");
  // var originalPostMessage = window.ReactNativeWebView;

  // var patchedPostMessage = function(message, targetOrigin, transfer) {
  //   originalPostMessage(message, targetOrigin, transfer);
  // };

  // patchedPostMessage.toString = function() {
  //   return String(Object.hasOwnProperty).replace(
  //     "hasOwnProperty",
  //     "postMessage"
  //   );
  // };

  // window.ReactNativeWebView = patchedPostMessage;
};
const patchPostMessageJsCode = "(" + String(patchPostMessageFunction) + ")();";

const receiveEvent = event => {
  console.log("New event!", event);
  if (event == "atomic-transact-close") {
    console.log("Need to close");
  } else if (event == "atomic-transact-finish") {
    console.log("I am finished");
  } else if (event == "atomic-transact-open-url") {
    console.log("Send me away");
  }
};

export default class Browser extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          injectedJavaScript={patchPostMessageJsCode}
          source={{
            uri: this.props.route.params.url
          }}
          onMessage={event => receiveEvent(event.nativeEvent.data)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
