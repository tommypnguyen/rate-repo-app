import { Platform } from 'react-native'

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textWhite: '#ffffff',
    primary: '#0366d6',
    appBarBackground: '#24292e',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: Platform.select({
    android: 'Roboto',
    ios: 'Arial',
    default: 'System'
  }),
  fontWeights: {
    light: '240',
    normal: '400',
    bold: '700'
  },
  avatarSizes: {
    normal: {
      width: 66,
      height: 58,
    },
    small: {
      width: 45,
      height: 45,
      borderRadius: 25/2
    }
  }
};

export default theme;