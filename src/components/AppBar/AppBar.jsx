import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useQuery, useApolloClient } from '@apollo/client'

import theme from '../../theme';
import useAuthStorage from '../../hooks/useAuthStorage';
import AppBarTab from './AppBarTab';
import { ME } from '../../graphql/queries';
import Text from '../common/Text';


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

const SignOut = () => {
  const authStorage = useAuthStorage()
  const client = useApolloClient()
  const onPress = async () => {
    await authStorage.removeAccessToken()
    client.resetStore()
  }
  return (
    <Pressable onPress={onPress} >
      <Text color="white" fontWeight="bold">Sign Out</Text>
    </Pressable>
  )
}

const AppBar = () => {
  const result = useQuery(ME);
  console.log(result)
  if(result.loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <ScrollView horizontal contentContainerStyle={styles.flexScrollView}>
          <AppBarTab text="Repositories" url="/" />
          {!result.data.me ? <AppBarTab text="Sign In" url="/signin" /> : <SignOut />}
        </ScrollView>
      </View>
    );
  }
};

export default AppBar;