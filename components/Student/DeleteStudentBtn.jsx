import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { DELETE_STUDENT } from './studentMutations';
import { toast } from 'react-toastify';
import Spinner from '../Spinner';
import { GET_STUDENTS } from './studentQueries';
import style from '@/styles/register.module.css';

const DeleteStudentBtn = ({ student }) => {
  const router = useRouter();
  const { id } = router.query;
  const [deleteStudent, { loading, error }] = useMutation(DELETE_STUDENT, {
    variables: {
      id,
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onCompleted: () => {
      toast.warning(`${student.firstName}'s profile deleted`);
      router.push('/register');
    },
    refetchQueries: [{ query: GET_STUDENTS }],
  });

  const confirmDelete = () => {
    const deleteProfle = window.confirm(
      `Are you sure you want to delete ${student.firstName}'s profile `
    );
    deleteProfle && deleteStudent();
  };

  return (
    <button
      type='button'
      className={`${style.btn} ${style.btnDelete} `}
      onClick={confirmDelete}
    >
      Delete
    </button>
  );
};

export default DeleteStudentBtn;
