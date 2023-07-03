
const StudentCard = ({ student }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>
          {student.lastName} {student.firstName}
        </h5>
        <p className='card-text'>Level: {student.level}</p>
        <div className='d-flex'>
          <button className='btn btn-sm text-danger'>delete</button>
          <button className='btn btn-sm text-success mx-2'>update</button>
        </div>
      </div>
    </div>
  );
};
export default StudentCard