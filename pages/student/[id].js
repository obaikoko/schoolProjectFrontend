import DeleteStudentBtn from '@/components/Student/DeleteStudentBtn';
import Spinner from '@/components/Spinner';
import UpdateStudentBtn from '@/components/Student/UpdateStudentBtn';
import { GET_STUDENT } from '@/components/Student/studentQueries';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

const StudentDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_STUDENT, {
    variables: {
      id,
    },
  });

  return (
    <>
      {data ? (
        <div className='container'>
          <h1 className='text-center mb-4'>Student Details</h1>
          <div className='card shadow'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label className='font-weight-bold'>First Name:</label>
                    <p className='text-muted'>
                      {data.studentDetails.firstName}
                    </p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>Last Name:</label>
                    <p className='text-muted'>{data.studentDetails.lastName}</p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>Surname:</label>
                    <p className='text-muted'>{data.studentDetails.surname}</p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>Level:</label>
                    <p className='text-muted'>{data.studentDetails.level}</p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>Date of Birth:</label>
                    <p className='text-muted'>{data.studentDetails.dob}</p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>Gender:</label>
                    <p className='text-muted'>{data.studentDetails.gender}</p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label className='font-weight-bold'>Year Admitted:</label>
                    <p className='text-muted'>
                      {data.studentDetails.yearAdmitted}
                    </p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>State of Origin:</label>
                    <p className='text-muted'>
                      {data.studentDetails.stateOfOrigin}
                    </p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>
                      Local Government:
                    </label>
                    <p className='text-muted'>{data.studentDetails.localGvt}</p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>Home Town:</label>
                    <p className='text-muted'>{data.studentDetails.homeTown}</p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>Sponsor:</label>
                    <p className='text-muted'>
                      {data.studentDetails.sponsor.name}
                    </p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>
                      Sponsor Relationship:
                    </label>
                    <p className='text-muted'>
                      {data.studentDetails.sponsor.relationship}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex m-2'>
            <UpdateStudentBtn
              student={data.studentDetails}
              key={data.studentDetails.id}
            />
            <DeleteStudentBtn student={data.studentDetails} />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default StudentDetails;
