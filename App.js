import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Routes from './src/routes';

export default class App extends React.Component {
  render() {
    return <Routes />;
  }
}
