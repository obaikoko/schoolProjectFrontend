import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { DELETE_STAFF } from './staffMutation';
import { toast } from 'react-toastify';
import Spinner from '../Spinner';
import { GET_STAFF } from './staffQueries';

const DeleteStaffBtn = () => {
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
      toast.warning('Student deleted successfully');
      router.push('/register');
    },
    refetchQueries: [{ query: GET_STAFF }],
  });
  return (
    <div>
      <button
        type='button'
        className='btn btn-sm'
        onClick={() => {
          deleteStaff();
        }}
      >
        {loading ? <Spinner /> : <p className='btn btn-secondary'>delete</p>}
      </button>
    </div>
  );
};

export default DeleteStaffBtn;
