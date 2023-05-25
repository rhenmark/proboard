import { gql } from '@apollo/client';

export const GET_PAGES_INFO = gql`
  query GetPages($name: String!) {
    pagesCollection(where: { screen: $name }) {
      items {
        isDown
        downtimeCover {
            url
        }
      }
    }
  }
`;
