/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text,
} from 'react-native';

import {Box} from '@org/components';
import {useTest} from '@org/hooks';
import {log} from '@org/helpers';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const test = useTest();

  useEffect(() => {
    log("I am a logger within 'packages'");
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Text>I am a text! - {test}</Text>
      </View>
      <Box />
    </SafeAreaView>
  );
};

export default App;
