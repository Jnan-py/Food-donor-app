import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({role,email,password},{rejectWithValue})=>{
    try{
      const {data} = await API.post('/auth/login',{role,email,password});
      if(data?.success){
        localStorage.setItem('token',data.token);
        alert("Logged In Successfully");
        window.location.replace('/');
      }
      return data;
    }catch(error){
      if(error.response && error.response.data.message){
        return rejectWithValue(error.response.data.message);
      }else{
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userRegister = createAsyncThunk(
  'auth/register',
  async({name,role,email,password,organisationName,trustsName,address,phone},{rejectWithValue})=>{
    try {
      const {data} = await API.post('/auth/register',{name,role,email,password,organisationName,trustsName,address,phone});
      if(data?.success){
        alert("User Registered Successfully");
        window.location.replace('/login');
      }
    }catch(error){
      if(error.response && error.response.data.message){
        return rejectWithValue(error.response.data.message);
      }else{
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async ({rejectWithValue})=>{
    try{
      const res = await API.get('/auth/current-user');
      if(res?.data){
        return res?.data;
      }
    }catch(error){
      if(error.response && error.response.data.message){
        return rejectWithValue(error.response.data.message);
      }else{
        return rejectWithValue(error.message);
      }
    }
  }
)