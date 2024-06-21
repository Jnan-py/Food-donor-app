import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Layout from '../components/shared/Layout/Layout';
import API from '../services/API';
import { useSelector } from 'react-redux';

const Donation = () => {
    const {user} = useSelector(state=>state.auth);
    const [data,setData] = useState([]);
    const getDonor=async()=>{
        try{
            const {data} = await API.post('/inventory/get-inventory-trust',{
                filters:{
                    inventoryType:'Donated',
                    Donor:user?._id,
                },
            });
            // console.log(data);
            if(data?.success){
                setData(data?.inventory);
            }
        }catch(error){
            console.log(error);
        }
    };
    useEffect(()=>{
        getDonor();
    },[user]);
    const finData = data?.filter(record => record.email === user?.email);
  return (
    <Layout>
        <>
        <div className='container'>
            <div className='ms-2 mt-4'>
      <h2>Food Donations Data</h2>
      <table className="table table-dark table-striped table-hover mt-4">
  <thead>
    <tr>
      <th scope="col">Food Type</th>
      <th scope="col">Quantity</th>
      <th scope="col">Transaction Type</th>
      <th scope="col">Organisation Name</th>
      <th scope="col">Date and Time of Donation</th>
    </tr>
  </thead>
  <tbody>
    {finData?.map((record)=>(
      // <tr key={record._id}>
      <tr key={record._id} className={record?.Organisation?.organisationName ? "" : "dcolor"}>
      <td>{record?.foodType}</td>
      <td>{record?.quantity}</td>
      <td>{record?.inventoryType}</td>
      <td>{record?.Organisation?.organisationName || "{Deleted By Admin}"}</td>
      <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
    </tr>
    ))}

  </tbody>
</table>
</div>
</div>
</>
    </Layout>
  );
};

export default Donation;
