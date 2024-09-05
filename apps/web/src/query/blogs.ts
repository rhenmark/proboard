import { gql } from '@apollo/client';

export const GET_BLOGS_LIST = gql`
  query {
    blogCollection {
      items {
        title
        metaDescription
        slug
        author {
            username
        }
        mediaCollection {
          items {
            url
          }
        }
      }
    }
  }
`;


export const GET_BLOGS_ITEM = gql`
  query GetBlog($slug: String!) {
    blogCollection(where: { slug: $slug }) {
      items {
        title
        metaDescription
        slug
        author {
            username
        }
        content {
            json
        }
        mediaCollection {
          items {
            url
          }
        }
      }
    }
  }
`;
