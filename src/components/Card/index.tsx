import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

interface CardProps {
  title: string;
  subtitle: string;
  color: string;
  icon: ReactElement;
}

export function Card({ title, subtitle, color = '#f8eee6', icon }: CardProps) {
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <View style={styles.iconContainer}>{ icon }</View>

      <Text style={styles.title}>{ title }</Text>
      
      <Text style={styles.subTitle}>{ subtitle }</Text>
    </View>
  );
}