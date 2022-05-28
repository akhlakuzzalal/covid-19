import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import { assets } from './assets';

export default function Text({ children, preset = 'default', style }) {
  const textStyle = StyleSheet.compose(assets[preset], style);
  return <RNText style={textStyle}>{children}</RNText>;
}
