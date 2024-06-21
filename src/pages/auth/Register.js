import React from 'react';
import Form from '../../components/shared/Form/Form';
import { useSelector } from 'react-redux';
import Spinner from '../../components/shared/Spinner';

export const Register = () => {
  const {loading,error} = useSelector(state=>state.auth);
  return (
    <>
    {error && <span>{alert(error)}</span>}
    {loading ? <Spinner/> : (
      <div className='row g-0'>
      <div className='col-md-5 form-container1'>
          <Form formTitle={'Register Page'} submitBtn={"Register"} formType={"Register"}/>
      </div>

      <div className='col-md-6 form-banner1'>
          <img src='./assets/images/img2.avif' alt='Register Image'/>
      </div>
  </div>
    )}
  </>  );
};

export default Register;
