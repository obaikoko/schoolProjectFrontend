import { gql } from '@apollo/client';

const GET_STAFF = gql`
  query getStaff {
    staff {
      id
      surname
      firstName
      lastName
      qualification
      gender
      dob
      maritalStatus
      role
      yearAdmitted
      stateOfOrigin
      localGvt
      homeTown
      residence
      phone
      email
    }
  }
`;
const GET_STAFF_DETAIL = gql`
  query staffDetail($id: ID!) {
    staffDetail(id: $id) {
      id
      surname
      firstName
      lastName
      qualification
      gender
      dob
      maritalStatus
      role
      yearAdmitted
      stateOfOrigin
      localGvt
      homeTown
      residence
      phone
      email
    }
  }
`;
export { GET_STAFF, GET_STAFF_DETAIL };