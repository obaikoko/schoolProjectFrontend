import DeleteStudentBtn from '@/components/Student/DeleteStudentBtn';
import Spinner from '@/components/Spinner';
import UpdateStudentBtn from '@/components/Student/UpdateStudentBtn';
import { GET_STUDENT } from '@/components/Student/studentQueries';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import style from '@/styles/profile.module.css';

const StudentDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_STUDENT, {
    variables: {
      id,
    },
  });

  if (loading) return <h3 className={style.loading}>Loading profile...</h3>;

  if (error) return <p className={style.loading}>Error: {error.message}</p>;

  return (
    <>
      {data && (
        <>
          <div className={style.container}>
            <div className={style.title}>
              <h1>{data.studentDetails.firstName}'s Profile</h1>
            </div>
            <div className={style.profile}>
              <ul>
                <li>
                  Surname <br />
                  <h4>{data.studentDetails.surname}</h4>
                </li>
                <li>
                  First name <br />
                  <h4>{data.studentDetails.firstName}</h4>
                </li>
                <li>
                  Other name <br />
                  <h4>{data.studentDetails.lastName}</h4>
                </li>
                <li>
                  Class <br />
                  <h4>{data.studentDetails.level}</h4>
                </li>
                <li>
                  Date of birth <br />
                  <h4>{data.studentDetails.dob}</h4>
                </li>
                <li>
                  Gender <br />
                  <h4>{data.studentDetails.gender}</h4>
                </li>
                <li>
                  State of Origin <br />
                  <h4>{data.studentDetails.stateOfOrigin}</h4>
                </li>
                <li>
                  Local Gvt <br />
                  <h4>{data.studentDetails.localGvt}</h4>
                </li>
                <li>
                  Home Town <br />
                  <h4>{data.studentDetails.homeTown}</h4>
                </li>
                <li>
                  Sponsor <br />
                  <h4>{data.studentDetails.sponsor.name}</h4>
                </li>
                <li>
                  Sponser Relationship <br />
                  <h4>{data.studentDetails.sponsor.relationship}</h4>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.profileBtn}>
            <UpdateStudentBtn
              student={data.studentDetails}
              key={data.studentDetails.id}
            />
            <DeleteStudentBtn student={data.studentDetails} />
          </div>
        </>
      )}
    </>
  );
};

export default StudentDetails;
