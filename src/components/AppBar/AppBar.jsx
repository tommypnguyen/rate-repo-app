import { View, StyleSheet } from 'react-native';

import theme from '../../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: theme.colors.appBarBackground,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories" />
    </View>
  );
};

export default AppBar;