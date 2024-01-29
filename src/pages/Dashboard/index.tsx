import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

export function Dashboard() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Olá, Luiz.</Text>
          <Text style={styles.subTitle}>Bem-vindo de volta.</Text>
        </View>
        <View style={styles.icon}>
          <Feather name='sliders' size={24} color="#121212" />
        </View>
      </View>

      <View style={styles.cardContainer}>
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
      </View>

      <View style={styles.cardContainer}>
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
      </View>
    </>
  );
}