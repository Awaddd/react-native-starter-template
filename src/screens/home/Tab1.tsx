import React from 'react';
import { View } from 'react-native';
import { Title, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Container from '../../containers/TabContainer';
import styled from '../../utils/Styled';
import { spacing } from '../../utils/theme';
import Header from '../../components/Header';

const Tab1 = () => {
  const theme = useTheme();
  return (
    <Container>
      <Header name="Tab 1" />
      <Main>
        <MainTitle color={theme.colors.text}>Tab 1</MainTitle>
        <Icon name="moon-full" color={theme.colors.primary} />
        <Icon name="moon-full" color={theme.colors.error} />
        <Icon name="moon-full" color={theme.colors.accent} />
      </Main>
    </Container>
  );
};

const Main = styled(View, {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const MainTitle = styled(Title, ({ color }) => ({
  fontSize: 21,
  color,
  marginVertical: spacing.md,
}));

export default Tab1;
