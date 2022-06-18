import React, { useContext } from 'react';
import { StatusBar, View } from 'react-native';
import { PreferencesContext } from '../state/global-state';
import styled from '../utils/Styled';
import { spacing, useTheme } from '../utils/theme';

const Container = ({ children }: { children?: React.ReactNode }) => {
  const theme = useTheme();
  const { isDarkTheme } = useContext(PreferencesContext);
  return (
    <AppContainer color={theme.colors.background}>
      <StatusBar barStyle={isDarkTheme ? 'light-content' : 'dark-content'} />
      {children}
    </AppContainer>
  );
};

const AppContainer = styled(View, ({ color }) => ({
  flex: 1,
  padding: spacing.rl,
  backgroundColor: color,
}));

export default Container;
