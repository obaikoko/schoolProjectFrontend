import { useRouter } from "next/router"
import { useMutation } from "@apollo/client"
import { DELETE_STUDENT } from "./studentMutations"
import { toast } from "react-toastify"
import Spinner from "../Spinner"
import { GET_STUDENTS } from "./studentQueries"


const DeleteStudentBtn = () => {
    const router = useRouter()
    const {id} = router.query
    const [deleteStudent, { loading, error }] = useMutation(DELETE_STUDENT, {
        variables: {
        id
    },
    onError: (error) => {
        toast.error(error.message)
    },
    onCompleted: () => {
        toast.warning('Student deleted successfully')
        router.push('/register')
    },
    refetchQueries:[{query: GET_STUDENTS}]

},
    
    );
  return (
    <div>
      <button
        type='button'
        className='btn btn-sm'
        onClick={() => {deleteStudent()}}
      >
        {loading ? (
          <Spinner />
        ) : (
          <p className='btn btn-secondary'>delete</p>
        )}
      </button>
    </div>
  );
}

export default DeleteStudentBtn