import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import * as S from './styles';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

export function Dashboard() {
  return (
    <>
      <Header />
      <S.Container>
        <View>
          <S.Title>Olá, Luiz.</S.Title>
          <S.SubTitle>Bem-vindo de volta.</S.SubTitle>
        </View>
        <View>
          <Feather name='sliders' size={24} color="#121212" />
        </View>
      </S.Container>

      <S.CardContainer>
        <Card 
          title="230.000" 
          subtitle='Vendas' 
          color='#c0dedd' 
          icon={<Feather name="percent" size={24} color="#121212" />}
        />
        <Card 
          title='8.549' 
          subtitle='Clientes' 
          color='#e6dff1' 
          icon={<Feather name="user" size={24} color="#121212" />}
        />
      </S.CardContainer>

      <S.CardContainer>
        <Card 
          title="1423" 
          subtitle='Produtos' 
          color='#f2eee9' 
          icon={<Feather name="columns" size={24} color="#121212" />}
        />
        <Card 
          title="19.745,00" 
          subtitle="Receitas R$" 
          color='#f1dfde' 
          icon={<Feather name="pie-chart" size={24} color="#121212" />}
        />
      </S.CardContainer>
      <Footer />
    </>
  );
}