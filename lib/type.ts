import {ReactText} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export enum DURATION {
  LONG = 8000,
  SHORT = 5000,
  NONE = 0,
}

export type ToastType = 'success' | 'fail' | 'loading' | 'info';

export type ToastProps = {
  duration?: DURATION;
  onhide?: () => void;
  content: ReactText | JSX.Element;
  modal?: boolean;
  mask?: string;
  style?: StyleProp<ViewStyle>;
};

export type PositionType = {
  left?: number;
  top?: number;
  bottom?: number;
  right?: number;
};
