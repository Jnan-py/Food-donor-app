import React, {useState} from 'react';
import InputType from './InputType';
import {Link} from 'react-router-dom';
import { handleLogin, handleRegister } from '../../../services/authService';

const Form = ({formType, submitBtn,formTitle}) => {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [trustsName, setTrustsName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
        <form onSubmit={(e)=>{
          if(formType==="Login") 
            return handleLogin(e,email,password,role);
          else if(formType==="Register") 
            return handleRegister(e,name,role,email,password,organisationName,trustsName,address,phone);
        }}>
          <h1 className='text-center'>{formTitle}</h1>
          <hr/>
          <div className='d-flex mb-3'>
            <select class="form-select" aria-label="Default select example" name="role" onChange={(e) => setRole(e.target.value)}>
            <option selected>Select Your Role</option>
            <option value={"Donor"}>Donor</option>
            <option value={"Organisation"}>Organisation</option>
            <option value={"CharitableTrusts"}>Charitable-Trusts</option>
            <option value={"Admin"}>Admin</option>
            </select>
          </div>
          {(() => {
            //eslint-disable-next-line
            switch(true) {
              case formType === "Login":{
                return (
                  <>
                    <InputType labelText={'E-Mail'} labelFor={'forEmail'} inputType={'email'} name={'email'} value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                    <InputType labelText={'Password'} labelFor={'forPassword'} inputType={'password'} name={'password'} value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                  </>
                );
              }
              case formType === "Register":{
                return(
                  <>
                    {(role==="Admin" || role==="Donor" )&& (
                      <InputType labelText={'Name'} labelFor={'forName'} inputType={'text'} name={'name'} value={name} 
                      onChange={(e) => setName(e.target.value)}/>
                    )}
                    {(role==="Organisation")&&(
                      <InputType labelText={'Organisation Name'} labelFor={'fororganisationName'} inputType={'text'} name={'organisationName'} value={organisationName} 
                      onChange={(e) => setOrganisationName(e.target.value)}/>
                    )}
                    {(role==="CharitableTrusts")&&(
                      <InputType labelText={'Charitable-Trust Name'} labelFor={'forTrustsName'} inputType={'text'} name={'trustsName'} value={trustsName} 
                      onChange={(e) => setTrustsName(e.target.value)}/>
                    )}
                    <InputType labelText={'E-Mail'} labelFor={'forEmail'} inputType={'email'} name={'email'} value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                    <InputType labelText={'Password'} labelFor={'forPassword'} inputType={'password'} name={'password'} value={password} 
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                      />
                    <InputType labelText={'Address'} labelFor={'forAddress'} inputType={'text'} name={'address'} value={address} 
                    onChange={(e) => setAddress(e.target.value)}/>
                    <InputType labelText={'Phone Number'} labelFor={'forPhone'} inputType={'text'} name={'phone'} value={phone} 
                    onChange={(e) => setPhone(e.target.value)}/>
                  </>
                );
              }
            }
          })()}

        <div className='d-flex flex-row justify-content-between'>
          {formType==="Login" ? (
            <p>Don't have an account ?     .
             <Link to="/register">Sign Up</Link>
            </p>
          ) :(
            <p>Already have an account ?    . 
             <Link to="/login">Login</Link>
            </p>
          )}
          <button className='btn btn-color' type='submit'>
            {submitBtn}
          </button>
        </div>
        </form>
    </div>
  );
};

export default Form;