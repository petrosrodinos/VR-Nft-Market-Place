import React from "react";
import { Animated, Text, View, VrButton } from "react-360";
import { connect } from "../redux/store";
import styles from "../styles/stylesheet";

class LeftPanel extends React.Component {
  state = {
    cryptocurrency: {
      symbol: "",
      time: "",
      close: "",
      high: "",
      low: "",
      open: "",
      volumefrom: "",
      volumeto: "",
    },
    fade: new Animated.Value(0),
  };

  fetchCryptoData(crypto) {
    fetch(
      `https://min-api.cryptocompare.com/data/histoday?fsym=${crypto}&tsym=USD`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          cryptocurrency: {
            open: data["Data"][30]["open"],
            close: data["Data"][30]["close"],
            high: data["Data"][30]["high"],
            low: data["Data"][30]["low"],
            volumefrom: data["Data"][30]["volumefrom"],
            volumeto: data["Data"][30]["volumeto"],
          },
        });
      });
  }

  clickHandler(index) {}

  componentDidMount() {
    this.fetchCryptoData(this.props.crypto);

    Animated.timing(this.state.fade, {
      toValue: 1,
      duration: 3000,
    }).start();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.crypto !== this.props.crypto) {
      this.fetchCryptoData(this.props.crypto);
    }
  }

  render() {
    let { fade } = this.state;

    return (
      <Animated.View style={[{ opacity: fade }, styles.leftPanel]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>NFT</Text>
        </View>
        <View style={{ marginTop: 100 }}>
          <Text
            style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}
          >
            Info
          </Text>
          <Text style={styles.textSize}>
            Price: ${this.state.cryptocurrency.high}
          </Text>
          <Text style={styles.textSize}>Owner: 3R#GK4P3KFW</Text>
          <Text style={styles.textSize}>Previous Owners: 3</Text>
          <Text style={styles.textSize}>
            Description: The best nft out there
          </Text>
        </View>
        <View>
          <VrButton
            style={this.state.hover ? styles.hover : styles.button}
            onEnter={() => this.setState({ hover: true })}
            onExit={() => this.setState({ hover: false })}
            onClick={() => this.clickHandler()}
          >
            <Text style={styles.textSize}>BUY</Text>
          </VrButton>
        </View>
      </Animated.View>
    );
  }
}

const ConnectedLeftPanel = connect(LeftPanel);

export default ConnectedLeftPanel;
