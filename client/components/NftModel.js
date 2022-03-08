import React from "react";
import { Animated, asset, View, Text } from "react-360";
import { connect } from "../redux/store";
import Entity from "Entity";

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class NftModel extends React.Component {
  state = {
    rotation: new Animated.Value(0),
    bounceValue: new Animated.Value(0.5),
  };

  bounce({ value, initial, toValue, friction = 1.5 }) {
    value.setValue(initial);

    Animated.spring(value, {
      toValue,
      friction,
    }).start();
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.rotation, {
        toValue: 360,
        duration: 6000,
      })
    ).start();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.crypto !== nextProps.crypto) {
      const cryptoConfig = {
        value: this.state.bounceValue,
        initial: 0.1,
        toValue: 0.5,
        friction: 5,
      };
      this.bounce(cryptoConfig);
    }
  }

  rotations = {
    BTC: {
      rotateX: 90,
      rotateY: 0,
      rotateZ: this.state.rotation,
    },
    DASH: {
      rotateX: 0,
      rotateY: this.state.rotation,
      rotateZ: 0,
    },
    XMR: {
      rotateX: 0,
      rotateY: this.state.rotation,
      rotateZ: 0,
    },
    ZEN: {
      rotateX: 0,
      rotateY: this.state.rotation,
      rotateZ: 0,
    },
    PLANE: {
      rotateX: 0,
      rotateY: this.state.rotation,
      rotateZ: 0,
    },
  };

  render() {
    return (
      <View>
        {/* <Image source={require("../static_assets/models/btcc.jpg")} /> */}
        <AnimatedEntity
          style={{
            transform: [
              { scaleX: 0.5 },
              { scaleY: 0.5 },
              { scaleZ: 0.5 },
              { rotateX: this.rotations[`${this.props.crypto}`].rotateX },
              { rotateY: this.rotations[`${this.props.crypto}`].rotateY },
              { rotateZ: this.rotations[`${this.props.crypto}`].rotateZ },
            ],
          }}
          source={{
            obj: asset(`models/${this.props.crypto}.obj`),
            mtl: asset(`models/${this.props.crypto}.mtl`),
          }}
        />
      </View>
    );
  }
}

export default ConnectedNftModel = connect(NftModel);
