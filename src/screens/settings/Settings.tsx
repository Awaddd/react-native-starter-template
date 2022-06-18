import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { IconButton, Switch, Text } from 'react-native-paper';
import { RootStackProps } from '../../../App';
import Container from '../../containers/Container';
import styled from '../../utils/Styled';
import { PreferencesContext } from '../../state/global-state';
import { spacing, useTheme } from '../../utils/theme';
import Header from '../../components/Header';

type props = StackScreenProps<RootStackProps, 'Settings'>;

const Settings = ({ navigation: { goBack } }: props) => {
  const theme = useTheme();
  const { toggleTheme, isDarkTheme } = useContext(PreferencesContext);

  return (
    <Container>
      <Screen>
        <Header
          name="Settings"
          icon={
            <IconButton
              icon="arrow-left-thick"
              color={theme.colors.text}
              size={21}
              onPress={() => goBack()}
            />
          }
        />
        <Main color={theme.colors.card}>
          <Field>
            <OptionLabel>Dark Mode</OptionLabel>
            <Option
              color={theme.colors.primary}
              value={isDarkTheme}
              onValueChange={toggleTheme}
            />
          </Field>
        </Main>
      </Screen>
    </Container>
  );
};

const Screen = styled(View, {
  flex: 1,
});

const Main = styled(View, ({ color }) => ({
  backgroundColor: color,
  paddingHorizontal: spacing.rl,
  paddingVertical: spacing.md,
  marginTop: spacing.xl,
  marginHorizontal: spacing.md,
  borderRadius: spacing.sm,
}));

const Field = styled(View, {
  margin: spacing.xs,
  flexDirection: 'row',
  alignItems: 'center',
});

const OptionLabel = styled(Text, {
  fontSize: 14,
  marginRight: spacing.sm,
});

const Option = styled(Switch, {
  marginLeft: 'auto',
  marginRight: -7,
  transform: [
    {
      scale: 0.7,
    },
  ],
});

export default Settings;
