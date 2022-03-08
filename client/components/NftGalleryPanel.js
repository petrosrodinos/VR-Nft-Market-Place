import React from "react";
import { Animated, Text, View, VrButton, NativeModules } from "react-360";
import styles from "../styles/stylesheet";
import { connect } from "../redux/store";

const surfaceModule = NativeModules.surfaceModule;

class NftGalleryPanel extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.createNftPanel}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Your Gallery</Text>
        </View>
        <View style={{ marginTop: 100 }}>
          <Text
            style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}
          >
            Info
          </Text>
          <Text style={styles.textSize}>Price: $</Text>
          <Text style={styles.textSize}>Owner: 3R#GK4P3KFW</Text>
          <Text style={styles.textSize}>Previous Owners: 3</Text>
          <Text style={styles.textSize}>
            Description: The best nft out there
          </Text>
          <VrButton onClick={() => surfaceModule.changeSurfaceType()}>
            <Text>Cylinder</Text>
          </VrButton>
        </View>
      </View>
    );
  }
}
export default NftGalleryPanel;
