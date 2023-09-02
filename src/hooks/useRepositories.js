import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { loading, data, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });
  return { loading, data, error }

};

export default useRepositories;