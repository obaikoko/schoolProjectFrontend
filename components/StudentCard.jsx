import UpdateStudentBtn from './UpdateStudentBtn';
import Link from 'next/link';

const StudentCard = ({ student }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='card-title'>
            {student.surname} {student.firstName}
          </h5>
          <Link className='btn btn-sm btn-light' href={`/student/${student.id}`}>View</Link>
        </div>
        <p className='card-text'>Level: {student.level}</p>
      </div>
    </div>
  );
};
export default StudentCard;
