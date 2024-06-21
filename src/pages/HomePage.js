import React, {useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/shared/Spinner';
import Layout from '../components/shared/Layout/Layout';
import Modal from '../components/shared/modal/Modal';
import API from '../services/API';
import moment from 'moment';

const HomePage = () => {
  const {loading,error,user} = useSelector(state=>state.auth);
  const [data,setData] = useState();
  const navigate = useNavigate();

  const getFoodRecords = async() => {
    try{
      const {data} = await API.get('/inventory/get-inventory');
      if(data?.success){
        setData(data?.inventory);
      }
    }catch(error){
      console.log(error);
    }
  };

  useEffect(()=>{
    getFoodRecords();
  },[]);

  return (
      <Layout>
      {user?.role === 'Admin' && navigate('/admin')}
      {user?.role==="Donor"&&navigate('/home-donor')}
      {user?.role==="CharitableTrusts"&&navigate('/home-trust')}
      {user?.role === "Organisation" && navigate('/home-org')}
    </Layout>
  );
};

export default HomePage;
