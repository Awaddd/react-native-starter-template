import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { RootStackProps } from '../../../App';
import Container from '../../containers/Container';
import { ScreenTitle } from '../../styles/main';
import styled from '../../utils/Styled';

type props = StackScreenProps<RootStackProps, 'Settings'>;

const Settings = ({ navigation: { goBack } }: props) => {
  const theme = useTheme();
  return (
    <Container>
      <Screen>
        <Header>
          <ButtonContainer>
            <IconButton
              icon="arrow-left"
              color={theme.colors.text}
              size={21}
              onPress={() => goBack()}
            />
          </ButtonContainer>
          <ScreenTitle color={theme.colors.text}>Settings</ScreenTitle>
        </Header>
      </Screen>
    </Container>
  );
};

const Screen = styled(View, {
  flex: 1,
});

const Header = styled(View, {
  flexDirection: 'row',
  alignItems: 'center',
});

const ButtonContainer = styled(View, {
  position: 'absolute',
  zIndex: 2,
  elevation: 2,
});

export default Settings;
