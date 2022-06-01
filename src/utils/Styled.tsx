import React, { ComponentType } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

type StyleableProp = { style?: StyleProp<unknown> };

type ComponentStyle = ViewStyle | TextStyle;

export default function styled<T extends StyleableProp>(
  Component: ComponentType<T>,
  fn: ComponentStyle | ((props: any) => ComponentStyle),
) {
  return (props: any) => {
    const styles = typeof fn === 'function' ? fn(props) : fn;
    return <Component {...props} style={[styles]} />;
  };
}
