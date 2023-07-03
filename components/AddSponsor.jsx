import { FaUser } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ADD_SPONSOR } from './mutations/mutation';
import { GET_SPONSORS } from './queries/query';
import Spinner from './Spinner';

const addSponsor = () => {
  const [formData, setFormData] = useState({
    name: '',
    occupation: '',
    phoneNumber: '',
    address: '',
    relationship: '',
  });
  const { name, occupation, phoneNumber, address, relationship } = formData;
  const [addSponsor, {loading}] = useMutation(ADD_SPONSOR, {
    variables: {
      name,
      occupation,
      phoneNumber,
      address,
      relationship,
    },
    onError: (error) => {
      toast.error(error.message);
    }, 
    onCompleted: () => {
      toast.success('Sponsor registered successfully')
    },
    refetchQueries: [{query: GET_SPONSORS}],
  });
  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if ((name && occupation && phoneNumber && address && relationship)) {

      addSponsor(name, occupation, phoneNumber, address, relationship);
        setFormData({
          name: '',
          occupation: '',
          phoneNumber: '',
          address: '',
          relationship: '',
        });
    } else {
      toast.warn(' please add all field ')
    }
  
  };
  return (
    <>
      <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#addSponsorModal'
      >
        {loading ? (<Spinner/>) : (  <div className='d-flex align-items-center'>
          <FaUser className='icon mx-2' />
          <div> Add Sponsor</div>
        </div>)}
      
      </button>

      <div
        className='modal fade'
        id='addSponsorModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                Add Sponsor
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={onSubmit}>
                <div className='mb-3'>
                  <label htmlFor='name' className='form-label'>
                    Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    value={name}
                    onChange={handleInputChange}
                    className='form-control'
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='occupation' className='form-label'>
                    Occupation
                  </label>
                  <input
                    type='text'
                    name='occupation'
                    id='occupation'
                    value={occupation}
                    onChange={handleInputChange}
                    className='form-control'
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='phoneNumber' className='form-label'>
                    Phone Number
                  </label>
                  <input
                    type='text'
                    name='phoneNumber'
                    id='phoneNumber'
                    value={phoneNumber}
                    onChange={handleInputChange}
                    className='form-control'
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='address' className='form-label'>
                    Address
                  </label>
                  <input
                    type='text'
                    name='address'
                    id='address'
                    value={address}
                    onChange={handleInputChange}
                    className='form-control'
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='relationship' className='form-label'>
                    Relationship
                  </label>
                  <select
                    name='relationship'
                    id='relationship'
                    className='form-select'
                    onChange={handleInputChange}
                  >
                    <option value=''></option>
                    <option value='Father '>Father </option>
                    <option value='Mother '>Mother </option>
                    <option value='Uncle '>Uncle </option>
                    <option value='Aunty '>Aunty </option>
                    <option value='Brother '>Brother </option>
                    <option value='Sister '>Sister </option>
                    <option value='Guardian '>Guardian </option>
                    <option value='Others '>Others </option>
                  </select>
                </div>
                <button
                  className='btn btn-secondary'
                  type='submit'
                  data-bs-dismiss='modal'
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default addSponsor;
