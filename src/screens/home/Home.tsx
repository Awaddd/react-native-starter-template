import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackProps } from '../../../App';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import styled from '../../utils/Styled';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

Icon.loadFont();

export type TabProps = {
  Tab1: undefined;
  Tab2: undefined;
};

const Tab = createBottomTabNavigator<TabProps>();

export type HomeProps = StackNavigationProp<RootStackProps, 'Home'>;

const Home = () => {
  const theme = useTheme();
  return (
    <HomeView edges={['top', 'left', 'right']}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Tab1') {
              iconName = focused ? 'cloud' : 'cloud-outline';
            } else if (route.name === 'Tab2') {
              iconName = focused
                ? 'clock-time-three'
                : 'clock-time-three-outline';
            }

            if (!iconName) {
              return null;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.text,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: theme.colors.background,
            borderTopWidth: 0,
            shadowOffset: {
              height: 0,
              width: 0,
            },
            elevation: 0,
          },
        })}>
        <Tab.Screen name="Tab1" component={Tab1} />
        <Tab.Screen name="Tab2" component={Tab2} />
      </Tab.Navigator>
    </HomeView>
  );
};

const HomeView = styled(SafeAreaView, {
  flex: 1,
});

export default Home;
