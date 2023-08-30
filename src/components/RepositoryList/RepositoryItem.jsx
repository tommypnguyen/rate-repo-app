import { View, StyleSheet } from 'react-native';

import RepositoryDescription from './RepositoryDescription';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  }
})

const RepositoryItem = ({ 
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  avatar
}) => {
  return (
    <View style={styles.container}>
      <RepositoryDescription 
        fullName={fullName} 
        description={description} 
        language={language} 
        avatar={avatar} 
        forksCount={forksCount}
        stargazersCount={stargazersCount}
        ratingAverage={ratingAverage}
        reviewCount={reviewCount}
      />
    </View>
  )
}

export default RepositoryItem