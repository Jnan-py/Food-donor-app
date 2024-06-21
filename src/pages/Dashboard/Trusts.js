import React, { useEffect, useState } from 'react';
import Layout from '../../components/shared/Layout/Layout';
import API from '../../services/API';
import moment from 'moment';

const Trusts = () => {
    const [data,setData] = useState([]);
    const getDonor=async()=>{
        try{
            const {data} = await API.get('/inventory/get-charitabletrusts');
            // console.log(data);
            if(data?.success){
                setData(data?.trusts);
            }
        }catch(error){
            console.log(error);
        }
    };
    useEffect(()=>{
        getDonor();
    },[]);
  return (
    <Layout>
        <>
        <div className='container'>
            <div className='ms-2 mt-4'>
      <h2>Charitable-Trusts Data</h2>
      <table className="table table-dark table-striped table-hover mt-4">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Address</th>
      <th scope="col">Date and Time of Enrollment</th>
    </tr>
  </thead>
  <tbody>
    {data?.map((record)=>(
      <tr key={record._id}>
      <td>{record?.trustsName}</td>
      <td>{record?.email}</td>
      <td>{record?.phone}</td>
      <td>{record?.address}</td>
      <td>{moment(record?.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
    </tr>
    ))}

  </tbody>
</table>
</div>
</div>
</>
    </Layout>
  )
};

export default Trusts;