import { gql } from '@apollo/client';



const GET_USERS = gql`
  query getUsers {
    users {
      id
      surname
      firstName
      lastName
      phone
      stateOfOrigin
      localGvt
      email
    }
  }
`;

const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      surname
      firstName
      lastName
      phone
      stateOfOrigin
      localGvt
      email
    }
  }
`;

const GET_SPONSORS = gql`
  query getSponsors {
    Sponsors {
      id
      name
      occupation
      relationship
      phoneNumber
      address
    }
  }
`;
export {  GET_USERS, GET_USER, GET_SPONSORS };
