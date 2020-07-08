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
import {RootSiblingParent} from 'react-native-root-siblings';
import Toast from '../lib';

const App = () => {
  return (
    <RootSiblingParent>
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
                    <Text style={{color: '#fff'}}>
                      你好，<Text style={{color: '#6c6'}}>用户</Text>
                    </Text>
                  ),
                },
                'info',
              )
            }
          />
          <Button title="show error" onPress={() => Toast.fail('失败')} />
          <Button title="destory" onPress={() => Toast.destroy()} />
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
    </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  btns: {
    height: '60%',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    margin: 100,
  },
});

export default App;
