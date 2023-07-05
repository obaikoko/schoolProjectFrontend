import Spinner from '@/components/Spinner';
import { GET_STAFF_DETAIL } from '@/components/staff/staffQueries';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import UpdateStaffBtn from '@/components/staff/UpdateStaffBtn';
import DeleteStaffBtn from '@/components/staff/DeleteStaffBtn';

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
                  <div className='form-group'>
                    <label className='font-weight-bold'>Residence:</label>
                    <p className='text-muted'>{data.staffDetail.residence}</p>
                  </div>
                  <div className='form-group'>
                    <label className='font-weight-bold'>Phone No:</label>
                    <p className='text-muted'>{data.staffDetail.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex m-2'>
            <UpdateStaffBtn
              staff={data.staffDetail}
              key={data.staffDetail.id}
            />
            <DeleteStaffBtn
              staff={data.staffDetail}
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
