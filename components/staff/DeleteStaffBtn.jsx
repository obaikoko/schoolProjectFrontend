import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { DELETE_STAFF } from './staffMutation';
import { toast } from 'react-toastify';
import Spinner from '../Spinner';
import { GET_STAFF } from './staffQueries';
import style from '@/styles/register.module.css';

const DeleteStaffBtn = ({staff}) => {
  const router = useRouter();
  const { id } = router.query;
  const [deleteStaff, { loading, error }] = useMutation(DELETE_STAFF, {
    variables: {
      id,
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onCompleted: () => {
      toast.warning(`${staff.firstName}'s profile deleted`);
      router.push('/register');
    },
    refetchQueries: [{ query: GET_STAFF }],
  });
   const confirmDelete = () => {
     const deleteProfle = window.confirm(
       `Are you sure you want to delete ${staff.firstName}'s profile `
     );
     deleteProfle && deleteStaff();
   };
  return (
    <div>
      <button
        type='button'
        className={`${style.btn} ${style.btnCancel} `}
        onClick={confirmDelete}
      >
        {loading ? <Spinner /> : <p className='btn btn-secondary'>delete</p>}
      </button>
    </div>
  );
};

export default DeleteStaffBtn;
