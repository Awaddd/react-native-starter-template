import { Text } from 'react-native-paper';
import styled from '../utils/Styled';

export const ScreenTitle = styled(Text, ({ color }) => ({
  flex: 1,
  color,
  textAlign: 'center',
  fontSize: 16,
}));
