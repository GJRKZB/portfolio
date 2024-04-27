import { gql } from "@apollo/client";

export const SEND_EMAIL = gql`
  mutation Mutation($email: String) {
    createUser(email: $email) {
      email
    }
  }
`;
