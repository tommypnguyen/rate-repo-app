import { useApolloClient, useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/queries';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useAuthStorage()
  const client = useApolloClient()

  const signIn = async({ username, password }) => {
    const result = await mutate({ variables: { credentials: { username, password } } })
    await authStorage.setAccessToken(result.data.authenticate.accessToken);
    client.resetStore();
  }

  return [signIn, result];
}

export default useSignIn