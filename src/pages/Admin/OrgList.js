import React, {useEffect,useState} from 'react';
import Layout from '../../components/shared/Layout/Layout';
import API from '../../services/API';
import moment from 'moment';

const OrgList = () => {
    const [data,setData] = useState([]);
    const getOrg=async()=>{
        try{
            const {data} = await API.get('/admin/org-list');
            // console.log(data);
            if(data?.success){
                setData(data?.orgData);
            }
        }catch(error){
            console.log(error);
        }
    };
    useEffect(()=>{
        getOrg();
    },[]);

    const handleDelete = async(id)=>{
        try{
            let answer = window.prompt("Confirmation of Deletion", "Confirm");
            if(!answer) return;
            const {data} = await API.delete(`/admin/delete-org/${id}`);
            alert(data?.message)
            window.location.reload();
        }catch(error){
            console.log(error);
        }
    };

  return (
    <Layout>
        <>
        <div className='container'>
            <div className='ms-2 mt-4'>
      <h2>All Organisations Data</h2>
      <table className="table table-dark table-striped table-hover mt-4">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Date and Time of Enrollment</th>
      <th scope="col"></th>      
    </tr>
  </thead>
  <tbody>
    {data?.map((record)=>(
      <tr key={record._id}>
      <td>{record.name || record.organisationName || record.trustsName}</td>
      <td>{record.email}</td>
      <td>{record.phone}</td>
      <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
      <td>
        <button className='btn btn-danger' onClick={() => handleDelete(record._id)}>
            Remove
        </button>
      </td>
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

export default OrgList;
