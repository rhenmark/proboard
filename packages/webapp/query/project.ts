import { gql } from "@apollo/client";

export const GET_PROJECT_INFO = gql`
query getProject($id: String!) {
    proboard(id: $id) {
        title
        developer {
            username
        }
        description {
            json
        }
    }
}
`