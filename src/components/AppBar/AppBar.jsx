import { View, StyleSheet, ScrollView } from 'react-native';

import theme from '../../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: theme.colors.appBarBackground,
  },
  flexScrollView: {
    flexDirection: 'row',
    gap: 10
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.flexScrollView}>
        <AppBarTab text="Repositories" url="/" />
        <AppBarTab text="Sign In" url="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;