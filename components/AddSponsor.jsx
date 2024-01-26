import { FaUser } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ADD_SPONSOR } from './mutations/mutation';
import { GET_SPONSORS } from './queries/query';
import Spinner from './Spinner';
import style from '@/styles/dashboard.module.css'

const addSponsor = () => {
  const [isSponsorForm, setIsSponsorForm] = useState(false)
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
  const clickedSponsorForm = () => {
    setIsSponsorForm(!isSponsorForm)
  }
  return (
    <div className={style.container}>
      <button className={style.btn} onClick={clickedSponsorForm}>
        Register Sponsor
      </button>
      <div
        className={
          isSponsorForm
            ? `${style.formContainer} ${style.showForm} `
            : `${style.formContainer}`
        }
      >
        <form className={`${style.form} ${style.showForm}`} onSubmit={onSubmit}>
          <h2>Register Sponsor</h2>
          <div className={style.formGroup}>
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
          <div className={style.formGroup}>
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
          <div className={style.formGroup}>
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
          <div className={style.formGroup}>
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
          <div className={style.formGroup}>
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
              <option value='Self Sponsor'>Self Sponsor </option>
              <option value='Others '>Others </option>
            </select>
          </div>
          <button className={style.btn} type='submit'>
            Register
          </button>
          <button
            onClick={clickedSponsorForm}
            className={style.btnCancel}
            type='button'
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default addSponsor;
