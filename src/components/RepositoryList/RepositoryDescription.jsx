import { View, Image, StyleSheet } from 'react-native';

import Text from '../common/Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  avatarSize: {
    small: theme.avatarSizes.small
  },
  flexContainer: {
    flexDiration: 'row',
  }
})

const cardHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  avatarContainer: {
    flexGrow: 0,
    padding: 10,
  },
  infoContainer: {
    flexGrow: 0,
    padding: 10,
    flexShrink: 1,
  },
  item: {
    padding: 5,
    alignSelf: 'flex-start',
  }
})

const cardFooterStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around'
  }
})

const footerItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center', 
    padding: 10
  },
  footerItem: {
    alignSelf: 'center'
  }
})

const FooterItem = ({ number, title }) => {
  return (
    <View style={footerItemStyles.container}>
      <Text style={footerItemStyles.footerItem} fontWeight="bold">{number}</Text>
      <Text style={footerItemStyles.footerItem} fontWeight="light">{title}</Text>
    </View>
  )
}

const CardFooter = ({ 
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount, 
  }) => {
    return (
      <View style={cardFooterStyles.container}>
        <FooterItem number={stargazersCount} title="Stars" />
        <FooterItem number={forksCount} title="Forks" />
        <FooterItem number={ratingAverage} title="Rating" />
        <FooterItem number={reviewCount} title="Reviews" />
      </View>
    )
  }

const CardHeader = ({ avatar, fullName, description, language }) => {
  return (
    <View style={cardHeaderStyles.container}>
      <View style={cardHeaderStyles.avatarContainer}>
        <Image 
          style={styles.avatarSize.small}
          source={{ uri: avatar }}
        />
      </View>
      <View style={cardHeaderStyles.infoContainer}>
        <Text style={cardHeaderStyles.item} fontWeight="bold">{fullName}</Text>
        <Text style={cardHeaderStyles.item} color="secondary" fontWeight="light">{description}</Text>
        <Text style={cardHeaderStyles.item} color="white" backgroundColor="primary" borderRadius="small">{language}</Text>
      </View>
    </View>
  )
}




const RepositoryDescription = ({ 
  avatar, 
  fullName, 
  description, 
  language, 
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,  }) => {
  return (
    <View style={styles.flexContainer}>
      <CardHeader  
        fullName={fullName} 
        description={description} 
        language={language} 
        avatar={avatar}  
      />
      <CardFooter 
        forksCount={forksCount}
        stargazersCount={stargazersCount}
        ratingAverage={ratingAverage}
        reviewCount={reviewCount}
      />
    </View>
  )
}

export default RepositoryDescription