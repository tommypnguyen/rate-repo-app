import { Pressable } from 'react-native';
import { Link } from 'react-router-native';

import Text from '../common/Text';


const AppBarTab = ({ text, url }) => {
  return (
    <Link to={url}>
      <Text color="white" fontWeight="bold">{text}</Text>
    </Link>
  );
};

export default AppBarTab;