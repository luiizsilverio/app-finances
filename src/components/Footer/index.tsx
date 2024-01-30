import { Feather, Ionicons } from '@expo/vector-icons';

import * as S from './styles';

export function Footer() {
  return (
    <S.Container>
      <Feather name="home" size={24} color="#121212" />
      <Ionicons name="wallet-outline" size={24} color="#121212" />
      <Feather name="bar-chart-2" size={24} color="#121212" />
      <Feather name="user" size={24} color="#121212" />
    </S.Container>
  );
}