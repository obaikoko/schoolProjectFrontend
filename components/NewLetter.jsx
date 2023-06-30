import React from 'react';

const Newsletter = () => {
  return (
    <div className='container  bg-dark text-light text-center py-5'>
      <div className='container'>
        <p className='lead'>SIGN UP FOR OUR </p>
        <h1>NEWSLETTER</h1>
        <span>
          Sign Up To Our VIP List And Get: First For New Products, Exclusive
          Events, Offers & Many More from Us!
        </span>

        <form className='mt-4'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <div className='input-group'>
                <input
                  className='form-control'
                  type='email'
                  name='email'
                  placeholder='Email'
                />
                <button className='btn btn-block btn-light' type='submit'>
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
