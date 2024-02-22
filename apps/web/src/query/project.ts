import { gql } from '@apollo/client';

export const GET_PROJECT_INFO = gql`
  query GetProject($slug: String!) {
    proboardCollection(where: { slug: $slug }) {
      items {
        title
        developer {
          username
        }
        description {
          json
        }
        assetsCollection {
          items {
            url
            contentType
          }
        }
        links
      }
    }
  }
`;
