import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons } from '@expo/vector-icons';
import { Dashboard } from "../pages/Dashboard";
import Wallet from "../pages/Wallet";
import Chart from "../pages/Chart";
import Profile from "../pages/Profile";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator screenOptions={{ 
      headerShown: false, 
      tabBarShowLabel: false,
      tabBarInactiveTintColor: '#666',
    }}>
      <Tab.Screen 
        name='dashboard' 
        component={Dashboard} 
        options={{
          // tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name='wallet' 
        component={Wallet} 
        options={{
          // tabBarLabel: 'Wallet',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name='chart' 
        component={Chart} 
        options={{
          // tabBarLabel: 'Chart',
          tabBarIcon: ({ color, size }) => (
            <Feather name="bar-chart-2" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name='profile' 
        component={Profile} 
        options={{
          // tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}