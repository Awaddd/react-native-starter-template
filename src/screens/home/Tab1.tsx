import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { Avatar, IconButton, Title } from 'react-native-paper';
import Container from '../../containers/TabContainer';
import styled from '../../utils/Styled';
import { spacing, useTheme } from '../../utils/theme';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

import { HomeProps } from './Home';

const Tab1 = () => {
  const theme = useTheme();
  const { width } = useWindowDimensions();

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
        <MainTitle color={theme.colors.text}>Tab 1</MainTitle>
        <Icons width={width}>
          <TabIcon
            size={40}
            icon="dumbbell"
            backgroundColor={theme.colors.primary}
          />
          <TabIcon size={40} icon="run" backgroundColor={theme.colors.accent} />
          <TabIcon
            size={40}
            icon="bridge"
            backgroundColor={theme.colors.accent2}
          />
          <TabIcon
            size={40}
            icon="treasure-chest"
            backgroundColor={theme.colors.accent3}
          />
        </Icons>
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

const Icons = styled(View, ({ width }) => ({
  marginTop: spacing.rl,
  width: width / 1.5,
  flexDirection: 'row',
  justifyContent: 'space-evenly',
}));

const TabIcon = styled(Avatar.Icon, {});

export default Tab1;
