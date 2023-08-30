import { Pressable } from 'react-native';

import Text from '../common/Text';


const AppBarTab = ({ text }) => {
  return (
    <Pressable>
      <Text color="white" fontWeight="bold">{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;