import React from 'react';
import { View } from 'react-native';
import { IconButton, Title, useTheme } from 'react-native-paper';
import Container from '../../containers/TabContainer';
import styled from '../../utils/Styled';
import { spacing } from '../../utils/theme';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { HomeProps } from './Home';

const Tab1 = () => {
  const theme = useTheme();
  const { navigate } = useNavigation<HomeProps>();

  return (
    <Container>
      <Header
        name="Home"
        icon={
          <IconButton
            icon="cog"
            color={theme.colors.text}
            size={21}
            onPress={() => navigate('Settings')}
          />
        }
      />
      <Main>
        <MainTitle color={theme.colors.text}>Tab 2</MainTitle>
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
