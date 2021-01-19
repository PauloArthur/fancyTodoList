import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="yellow" />
    <View style={{ flex: 1, backgroundColor: 'yellow' }} />
  </NavigationContainer>
);

export default App;