import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Appearance } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screens/home/Home';
import Settings from './src/screens/settings/Settings';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationTheme,
} from '@react-navigation/native';
import { PreferencesContext } from './src/state/global-state';
import { readData, storeData } from './src/utils/storage';
import RNBootSplash from 'react-native-bootsplash';

export type RootStackProps = {
  Home: undefined;
  Settings: undefined;
};

const RootStack = createStackNavigator<RootStackProps>();

const forFade = ({ current }: { current: any }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const DefaultTheme = {
  ...PaperTheme,
  ...NavigationTheme,
  colors: {
    ...PaperTheme.colors,
    ...NavigationTheme.colors,
    primary: '#004fff',
    accent: '#FF007F',
    error: '#f2385a',
  },
};

const DarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: '#004fff',
    accent: '#FF007F',
    error: '#f2385a',
  },
};

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    Appearance.getColorScheme() === 'dark' ? true : false,
  );

  let theme = isDarkTheme ? DarkTheme : DefaultTheme;

  const toggleTheme = useCallback(() => setIsDarkTheme(val => !val), []);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isDarkTheme,
    }),
    [toggleTheme, isDarkTheme],
  );

  useEffect(() => {
    const setIsDarkThemeFromAsyncStorage = async () => {
      try {
        const darkThemeEnabled = await readData('DarkThemeEnabled');

        if (!darkThemeEnabled) {
          await storeData(
            'DarkThemeEnabled',
            Appearance.getColorScheme() === 'dark' ? true : false,
          );
        }

        setIsDarkTheme(JSON.parse(darkThemeEnabled as string));
      } catch (error) {
        console.log('error', error);
      }
    };

    const initialise = async () => {
      await setIsDarkThemeFromAsyncStorage();
      await new Promise(resolve => {
        setTimeout(resolve, 2000);
      });
    };

    initialise().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log('splash screen hidden successfully');
    });
  }, []);

  useEffect(() => {
    const updateAsyncStorage = async () => {
      try {
        await storeData('DarkThemeEnabled', isDarkTheme);
      } catch (error) {
        console.log('error', error);
      }
    };

    updateAsyncStorage();
  }, [isDarkTheme]);

  return (
    <PreferencesContext.Provider value={preferences}>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <RootStack.Navigator>
              <RootStack.Screen
                name="Home"
                component={Home}
                options={{
                  headerShown: false,
                  cardStyleInterpolator: forFade,
                }}
              />
              <RootStack.Screen
                name="Settings"
                component={Settings}
                options={{
                  headerShown: false,
                  cardStyleInterpolator: forFade,
                }}
              />
            </RootStack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </PreferencesContext.Provider>
  );
};

export default App;
