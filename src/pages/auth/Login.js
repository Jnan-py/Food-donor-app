import React from 'react';
import Form from '../../components/shared/Form/Form';
import { UseSelector, useSelector } from 'react-redux';
import Spinner from '../../components/shared/Spinner';
import { IoFastFoodSharp } from "react-icons/io5";

const Login = () => {
  const {loading,error} = useSelector(state=>state.auth);
  return (
    <>
    {error && <span>{alert(error)}</span>}
    {loading ? <Spinner/> : (
      <div className='row g-0'>
      <div className='col-md-5 form-container'>
          <Form formTitle={'Login Page'} submitBtn={"Login"} formType={"Login"}/>
      </div>

      <div className='col-md-6 form-banner'>
          <img src='./assets/images/img1.avif' alt='Login Image'/>
      </div>
  </div>
    )}
  </>  );
};

export default Login;