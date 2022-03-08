import React from "react";
import { Animated, Text, View, VrButton } from "react-360";
import styles from "../styles/stylesheet";
import { connect } from "../redux/store";

class CreateNftPanel extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.createNftPanel}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Create Your NFT</Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <View>
            <Text
              style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}
            >
              Price:
            </Text>
            <Text
              style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}
            >
              Image:
            </Text>
            <Text
              style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}
            >
              Description:
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const ConnectedPanel = connect(CreateNftPanel);
export default ConnectedPanel;
