/**
 * @author Paulo Braga de Assis Junior
 * @name RickAndMorty propTypes
 * @type {propTypes}
 * @example
 *
 */

import React, {Component} from 'react';
import {View, Animated, Modal, Image} from 'react-native';

import {style} from './style';

import LOGO_RICK_MORTY from '../../../assets/logo_rick_morty.png';

export default class LoadinRM extends Component {
  springValue: Animated.Value;
  constructor(props: any) {
    super(props);
    this.springValue = new Animated.Value(0.1);
    this.spring();
  }

  spring = () => {
    this.springValue.setValue(0.1);
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1,
      velocity: 0.1,
      useNativeDriver: false,
    }).start();
  };

  render() {
    const {loading} = this.props;
    return (
      <Modal animationType="slide" transparent={false} visible={loading}>
        <View style={style.containe}>
          <Animated.View style={{transform: [{scale: this.springValue}]}}>
            <Image
              source={LOGO_RICK_MORTY}
              resizeMode="contain"
              style={style.image}
            />
          </Animated.View>
        </View>
      </Modal>
    );
  }
}
