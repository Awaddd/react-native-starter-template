import React from 'react';
import { View } from 'react-native';
import styled from '../utils/Styled';
import { ScreenTitle } from '../styles/main';
import { spacing, useTheme } from '../utils/theme';

const Header = ({ name, icon }: { name?: string; icon?: Element }) => {
  const theme = useTheme();

  return (
    <Container>
      {name && <ScreenTitle color={theme.colors.text}>{name}</ScreenTitle>}
      <SettingsButtonContainer>{icon}</SettingsButtonContainer>
    </Container>
  );
};

const Container = styled(View, {
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  height: spacing.xl,
});

const SettingsButtonContainer = styled(View, {
  position: 'absolute',
  right: 0,
  top: -10,
});

export default Header;
