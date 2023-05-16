import { gql } from "@apollo/client";

export const GET_PROJECTS_LIST = gql`
query {
  proboardCollection {
    items {
      title
      shortDescription
      developer {
        username
      }
      imagePreview {
        url
      }
      type
      slug
      sys {
        id
      }
    }
  }
}
`