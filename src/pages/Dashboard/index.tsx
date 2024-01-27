import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './styles';
import { Header } from '../../components/Header';

export function Dashboard() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Dashboard</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}