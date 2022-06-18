import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperTheme,
  useTheme as usePaperTheme,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationTheme,
} from '@react-navigation/native';

export const spacing = {
  xs: 4,
  sm: 7,
  md: 10,
  rl: 14,
  lg: 20,
  xl: 24,
  xxl: 30,
  xxxl: 45,
  xxxxl: 60,
};

export const GLOBAL_PAGE_PADDING = spacing.rl;

export const DefaultTheme = {
  ...PaperTheme,
  ...NavigationTheme,
  colors: {
    ...PaperTheme.colors,
    ...NavigationTheme.colors,
    primary: '#020122',
    accent: '#3185FC',
    accent2: '#FF521B',
    accent3: '#1ec778',
  },
};

export const DarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: '#FF521B',
    accent: '#3185FC',
    accent2: '#1ec778',
    accent3: '#5c1bff',
  },
};

type Theme = typeof DefaultTheme & typeof DarkTheme;

export const useTheme = usePaperTheme as () => Theme;
