import Spinner from '@/components/Spinner';
import { GET_STAFF_DETAIL } from '@/components/staff/staffQueries';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import UpdateStaffBtn from '@/components/staff/UpdateStaffBtn';
import DeleteStaffBtn from '@/components/staff/DeleteStaffBtn';
import style from '@/styles/profile.module.css';

const StaffDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_STAFF_DETAIL, {
    variables: {
      id,
    },
  });

   if (loading) return <h3 className={style.loading}>Loading profile...</h3>;

   if (error) return <p loading>Error: {error.message}</p>;

  return (
    <>
      {data && (
        <>
          <div className={style.container}>
            <div className={style.title}>
              <h1>{data.staffDetail.firstName}'s Profile</h1>
            </div>
            <div className={style.profile}>
              <ul>
                <li>
                  Surname <br />
                  <h4>{data.staffDetail.surname}</h4>
                </li>
                <li>
                  First name <br />
                  <h4>{data.staffDetail.firstName}</h4>
                </li>
                <li>
                  Other name <br />
                  <h4>{data.staffDetail.lastName}</h4>
                </li>
                <li>
                  Qualification <br />
                  <h4>{data.staffDetail.qualification}</h4>
                </li>
                <li>
                  Department <br />
                  <h4>{data.staffDetail.role}</h4>
                </li>

                <li>
                  Date of birth <br />
                  <h4>{data.staffDetail.dob}</h4>
                </li>
                <li>
                  Gender <br />
                  <h4>{data.staffDetail.gender}</h4>
                </li>
                <li>
                  State of Origin <br />
                  <h4>{data.staffDetail.stateOfOrigin}</h4>
                </li>
                <li>
                  Local Gvt <br />
                  <h4>{data.staffDetail.localGvt}</h4>
                </li>
                <li>
                  Home Town <br />
                  <h4>{data.staffDetail.homeTown}</h4>
                </li>
                <li>
                  Residence <br />
                  <h4>{data.staffDetail.residence}</h4>
                </li>
                <li>
                  Contact <br />
                  <h4>{data.staffDetail.phone}</h4>
                </li>
                <li>
                  Year of Appointment <br />
                  <h4>{data.staffDetail.yearAdmitted}</h4>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.profileBtn}>
            <UpdateStaffBtn
              staff={data.staffDetail}
              key={data.staffDetail.id}
            />
            <DeleteStaffBtn staff={data.staffDetail} />
          </div>
        </>
      ) }
    </>
  );
};

export default StaffDetails;
