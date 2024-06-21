import React, { useEffect, useState } from 'react';
import Layout from '../../components/shared/Layout/Layout';
import moment from 'moment';
import API from '../../services/API';
import { useSelector } from 'react-redux';

const Organisations = () => {
    const {user}=useSelector(state=>state.auth);
    const [data,setData] = useState([]);
    const getOrg=async()=>{
        try{
            if(user?.role==="Donor"){
                const {data} = await API.get('/inventory/get-organisation');
                if(data?.success){
                    setData(data?.organisations);
                }
            }
            if(user?.role==="CharitableTrusts"){
                const {data} = await API.get('/inventory/get-organisation-for-trust');
                if(data?.success){
                    setData(data?.organisations);
                }
            }
        }catch(error){
            console.log(error);
        }
    };
    useEffect(()=>{
        getOrg();
    },[user]);
  return (
    <Layout>
        <>
        <div className='container'>
            <div className='ms-2 mt-4'>
      <h2>Donated Organisations Data</h2>
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
      <td>{record?.organisationName || "{Deleted By Admin}"}</td>
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

export default Organisations;
