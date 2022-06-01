import React, { useContext } from 'react';
import { StatusBar, View, SafeAreaView } from 'react-native';
import { useTheme } from 'react-native-paper';
import { PreferencesContext } from '../state/global-state';
import styled from '../utils/Styled';
import { spacing } from '../utils/theme';

const Container = ({ children }: { children?: React.ReactNode }) => {
  const theme = useTheme();
  const { isDarkTheme } = useContext(PreferencesContext);
  return (
    <AppContainer
      edges={['top', 'left', 'right']}
      color={theme.colors.background}>
      <StatusBar barStyle={isDarkTheme ? 'light-content' : 'dark-content'} />
      <AppView>{children}</AppView>
    </AppContainer>
  );
};

const AppContainer = styled(SafeAreaView, ({ color }) => ({
  flex: 1,
  backgroundColor: color,
}));

const AppView = styled(View, {
  flex: 1,
  padding: spacing.rl,
});

export default Container;
