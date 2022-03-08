import React from "react";
import {
  Animated,
  asset,
  NativeModules,
  Text,
  View,
  VrButton,
} from "react-360";
import { connect, nextCrypto } from "../redux/store";
import styles from "../styles/stylesheet";

const { AudioModule } = NativeModules;

class RightPanel extends React.Component {
  state = {
    cryptoData: {
      symbol: "",
      algorithm: "",
      proofType: "",
      blockNumber: "",
      blockTime: "",
      blockReward: "",
    },
    hover: false,
    fade: new Animated.Value(0),
  };

  fetchCryptoData(crypto) {
    fetch(
      `https://min-api.cryptocompare.com/data/coin/generalinfo?fsyms=${crypto}&tsym=USD&api_key=1bd0917187334c260db80edb86b250d88a7fe2c3721153a3467742137b6499ba`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          cryptoData: {
            symbol: data["Data"][0]["CoinInfo"]["Name"],
            algorithm: data["Data"][0]["CoinInfo"]["Algorithm"],
            proofType: data["Data"][0]["CoinInfo"]["ProofType"],
            blockNumber: data["Data"][0]["CoinInfo"]["BlockNumber"],
            blockTime: data["Data"][0]["CoinInfo"]["BlockTime"],
            blockReward: data["Data"][0]["CoinInfo"]["BlockReward"],
          },
        })
      );
  }

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

  clickHandler(index) {
    nextCrypto(index);

    // AudioModule.playOneShot({
    //   source: asset("audio/click.wav"),
    // });
  }

  render() {
    let { fade } = this.state;

    return (
      <Animated.View style={[{ opacity: fade }, styles.rightPanel]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Information</Text>
        </View>
        <View>
          <Text
            style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}
          >
            General
          </Text>
          <Text style={styles.textSize}>Created At: 25/07/2000</Text>
          <Text style={styles.textSize}>Previous Owner: 0F#0534JGGEKOP25</Text>
          <Text style={styles.textSize}>Copies: 20</Text>
          <Text style={styles.textSize}>Copies Left: 5</Text>
        </View>
        <View>
          <VrButton
            style={this.state.hover ? styles.hover : styles.button}
            onEnter={() => this.setState({ hover: true })}
            onExit={() => this.setState({ hover: false })}
            onClick={() => this.clickHandler(this.props.index)}
          >
            <Text style={styles.textSize}>Next</Text>
          </VrButton>
        </View>
      </Animated.View>
    );
  }
}

const ConnectedRightPanel = connect(RightPanel);

export default ConnectedRightPanel;
