import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorWhite: {
    color: theme.colors.textWhite
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  fontWeightLight: {
    fontWeight: theme.fontWeights.light
  },
  background: {
    backgroundColor: '#0366d6'
  },
  borderRadiusSmall: {
    borderRadius: 10/2
  }
});

const Text = ({ color, fontSize, fontWeight, style, backgroundColor, borderRadius, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'white' && styles.colorWhite,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    fontWeight === 'light' && styles.fontWeightLight,
    backgroundColor === 'primary' && styles.background,
    borderRadius === 'small' && styles.borderRadiusSmall,
    style
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;