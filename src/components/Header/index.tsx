import React from 'react';
import { Image, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import styles from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.menuWrapper}>
        <Feather name="menu" size={32} color="#121212" />
      </View>
      <View style={styles.userWrapper}>
        <View style={styles.userImageWrapper}>
          <Image 
            source={{uri: 'https://github.com/luiizsilverio.png'}} 
            resizeMode='cover'
            style={styles.userImage}
          />
        </View>
      </View>
    </View>
  );
}