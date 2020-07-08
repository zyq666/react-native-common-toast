/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Button,
  Text,
} from 'react-native';
import Toast, {ToastRoot} from '../lib';
import {DURATION} from '../lib/type';

const App = () => {
  return (
    <ToastRoot>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.btns}>
          <Button title="show success" onPress={() => Toast.success('成功')} />
          <Button title="show info" onPress={() => Toast.info('提示')} />
          <Button
            title="show loading"
            onPress={() => Toast.loading('loading')}
          />
          <Button
            title="show Element"
            onPress={() =>
              Toast.show(
                {
                  content: (
                    <View style={styles.custom}>
                      <Text style={{color: '#fff'}}>
                        你好，<Text style={{color: '#6c6'}}>用户</Text>
                      </Text>
                      <Text
                        onPress={Toast.destroy}
                        style={{color: '#fff', marginLeft: 10}}>
                        关闭
                      </Text>
                    </View>
                  ),
                  modal: true,
                  duration: DURATION.NONE,
                },
                'info',
              )
            }
          />
          <Button title="show error" onPress={() => Toast.fail('失败')} />
          <Button title="destory" onPress={Toast.destroy} />
          <Button
            title="模态"
            onPress={() => Toast.success({content: '模态', modal: true})}
          />
          <Button
            title="自定义样式"
            onPress={() =>
              Toast.success({
                content: '模态',
                modal: true,
                style: {backgroundColor: '#6c6'},
              })
            }
          />
          <Button
            title="模态+遮罩"
            onPress={() =>
              Toast.info({
                content: '模态+遮罩',
                modal: true,
                mask: 'rgba(0, 0, 0, .3)',
              })
            }
          />
          <Button
            title="模态+遮罩+回调"
            onPress={() =>
              Toast.info({
                content: '模态+遮罩+回调',
                modal: true,
                mask: 'rgba(0, 0, 0, .3)',
                onhide: () => Toast.success('成功关闭!'),
              })
            }
          />
        </View>
      </SafeAreaView>
    </ToastRoot>
  );
};

const styles = StyleSheet.create({
  btns: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginHorizontal: 100,
    backgroundColor: 'red',
  },
  custom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
