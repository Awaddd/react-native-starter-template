import React, { useContext } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme, IconButton } from 'react-native-paper';
import styled from '../utils/Styled';
import { HomeProps } from '../screens/home/Home';
import { PreferencesContext } from '../state/global-state';
import { ScreenTitle } from '../styles/main';

const Header = ({ name }: { name?: string }) => {
  const { navigate } = useNavigation<HomeProps>();

  const theme = useTheme();
  const { toggleTheme, isDarkTheme } = useContext(PreferencesContext);

  return (
    <Container>
      <DarkModeButtonContainer>
        <IconButton
          icon={isDarkTheme ? 'moon-waning-crescent' : 'white-balance-sunny'}
          color={theme.colors.text}
          size={21}
          onPress={() => toggleTheme()}
        />
      </DarkModeButtonContainer>
      <ScreenTitle color={theme.colors.text}>{name}</ScreenTitle>
      <SettingsButtonContainer>
        <IconButton
          icon="cog"
          color={theme.colors.text}
          size={21}
          onPress={() => navigate('Settings')}
        />
      </SettingsButtonContainer>
    </Container>
  );
};

const Container = styled(View, {
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
});

const DarkModeButtonContainer = styled(View, {
  zIndex: 2,
  elevation: 2,
  position: 'absolute',
  left: 0,
});

const SettingsButtonContainer = styled(View, {
  position: 'absolute',
  right: 0,
});

export default Header;
