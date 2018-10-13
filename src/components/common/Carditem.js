import React from "react";
import { View } from "react-native";

export const CardItem = props => (
  <View style={styles.containerStyle}>{props.children}</View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#FFF",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#DDD",
    position: "relative"
  }
}