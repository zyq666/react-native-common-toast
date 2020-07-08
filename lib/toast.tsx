/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {ToastProps, PositionType, ToastType} from './type';

const {width, height} = Dimensions.get('screen');

export default React.memo((props: ToastProps & {type: ToastType}) => {
  const {type, content, modal, mask, style} = props;
  const [position, setPosition] = React.useState<PositionType | null>(null);

  const buildIcon = React.useMemo(() => {
    switch (type) {
      case 'loading':
        return <ActivityIndicator style={styles.icon} />;
      case 'fail':
        return <Text style={[styles.text, styles.icon]}>X</Text>;
      case 'success':
        return <Text style={[styles.text, styles.icon]}>√</Text>;
      case 'info':
        return null;
      default:
        return null;
    }
  }, [type]);

  return (
    <View
      style={[
        styles.modal,
        modal ? {backgroundColor: 'transparent'} : {},
        mask ? {backgroundColor: mask} : {},
      ]}>
      <View
        onLayout={(e) => {
          const {width: w, height: h} = e.nativeEvent.layout;
          setPosition({
            left: (width - w) / 2,
            top: (height - h) / 2,
          });
        }}
        style={[
          styles.toastView,
          position,
          style,
          {opacity: position ? 1 : 0},
        ]}>
        {buildIcon}
        {typeof content === 'string' ? (
          <Text style={styles.text}>{content}</Text>
        ) : (
          content
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  toastView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 5,
    maxWidth: width * 0.7,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  icon: {
    marginBottom: 5,
  },
});
