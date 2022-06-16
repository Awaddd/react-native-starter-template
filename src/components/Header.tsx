import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import styled from '../utils/Styled';
import { ScreenTitle } from '../styles/main';

const Header = ({ name, icon }: { name?: string; icon?: Element }) => {
  const theme = useTheme();

  return (
    <Container>
      <ScreenTitle color={theme.colors.text}>{name}</ScreenTitle>
      <SettingsButtonContainer>{icon}</SettingsButtonContainer>
    </Container>
  );
};

const Container = styled(View, {
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
});

const SettingsButtonContainer = styled(View, {
  position: 'absolute',
  right: 0,
  top: -10,
});

export default Header;
