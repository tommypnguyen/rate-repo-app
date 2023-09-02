import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
query {
  repositories {
    edges {
      node {
        fullName
        description
        language
        forksCount
        stargazersCount
        ratingAverage
        reviewCount
        ownerAvatarUrl
      }
    }
  }
}
`

export const SIGN_IN = gql`
mutation authenticate($credentials: AuthenticateInput) {
  authenticate(credentials: $credentials) {
    accessToken
  }
}
`

export const ME = gql`
query Me {
  me {
    id
  }
}
`