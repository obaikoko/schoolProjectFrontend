import DeleteStudentBtn from '@/components/Student/DeleteStudentBtn';
import Spinner from '@/components/Spinner';
import UpdateStudentBtn from '@/components/Student/UpdateStudentBtn';
import { GET_STAFF_DETAIL } from '@/components/staff/staffQueries';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

const StaffDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_STAFF_DETAIL, {
    variables: {
      id,
    },
  });


  return (
    <>
      {data ? (
        <div className='container'>
          <h1 className='text-center mb-4'>Staff Details</h1>
          <div className='card shadow'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label className='font-weight-bold'>First Name:</label>
                    <p className='text-muted'>
                      {data.staffDetail.firstName}
                    </p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>Last Name:</label>
                    <p className='text-muted'>{data.staffDetail.lastName}</p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>Surname:</label>
                    <p className='text-muted'>{data.staffDetail.surname}</p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>Role or Subject handled:</label>
                    <p className='text-muted'>{data.staffDetail.role}</p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>Date of Birth:</label>
                    <p className='text-muted'>{data.staffDetail.dob}</p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>Gender:</label>
                    <p className='text-muted'>{data.staffDetail.gender}</p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label className='font-weight-bold'>Year Admitted:</label>
                    <p className='text-muted'>
                      {data.staffDetail.yearAdmitted}
                    </p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>State of Origin:</label>
                    <p className='text-muted'>
                      {data.staffDetail.stateOfOrigin}
                    </p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>
                      Local Government:
                    </label>
                    <p className='text-muted'>{data.staffDetail.localGvt}</p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>Home Town:</label>
                    <p className='text-muted'>{data.staffDetail.homeTown}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex m-2'>
            <UpdateStudentBtn
              student={data.staffDetail}
              key={data.staffDetail.id}
            />
            <DeleteStudentBtn
              student={data.staffDetail}
            />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default StaffDetails;
