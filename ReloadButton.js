import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {DevSettings, NativeModules} from 'react-native';

const ReloadButton = () => {
  const handleLongPress = () => {
    // Reload the application
    DevSettings.reload();
  };

  const handlePress = () => {
    // Open the debug menu
    NativeModules.DevMenu.show();
  };

  return (
    <TouchableOpacity
      onLongPress={handleLongPress}
      onPress={handlePress}
      style={{
        position: 'absolute',
        zIndex: 100,
        top: 20,
        right: 20,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'lightblue',
      }}>
      <Text>Debug</Text>
    </TouchableOpacity>
  );
};

export default ReloadButton;
