import React, {useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/shared/Spinner';
import Layout from '../components/shared/Layout/Layout';
import Modal from '../components/shared/modal/Modal';
import API from '../services/API';
import moment from 'moment';

const FoodStock = () => {
  const {loading,error,user} = useSelector(state=>state.auth);
  const [data,setData] = useState();

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

  const deliveredData = data?.filter(record => record.inventoryType === 'Delivered');
  const donatedData = data?.filter(record => record.inventoryType === 'Donated');

    return (
        <Layout>
      {error && <span>{alert(error)}</span>}
      {loading ? <Spinner/> :(
        <>
        <div className='container'>
        <div className='ms-2 mt-4'>
          <h2>Food Donation and Delivery Data</h2>
        </div>
        <h4 className='ms-4' data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{cursor: "pointer"}}>
          <i className='fa-solid fa-plus text-success py-4'></i>
          Insert New Food Stock
        </h4>
        <h4>Donation Records</h4>
        <table className="table table-dark table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Donor Email</th>
      <th scope="col">Food Type</th>
      <th scope="col">Quantity</th>
      <th scope="col">Transaction Type</th>
      <th scope="col">Date & Time</th>
    </tr>
  </thead>
  <tbody>
    {donatedData?.map(record=>(
      <tr key={record._id}>
      <td>{record.email}</td>
      <td>{record.foodType}</td>
      <td>{record.quantity}</td>
      <td>{record.inventoryType}</td>
      <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
    </tr>
    ))}

  </tbody>
</table>

<h4 className='mt-3'>Delivery Records</h4>
        <table className="table table-dark table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Trust's Email</th>
      <th scope="col">Food Type</th>
      <th scope="col">Quantity</th>
      <th scope="col">Transaction Type</th>
      <th scope="col">Date & Time</th>
    </tr>
  </thead>
  <tbody>
    {deliveredData?.map(record=>(
      <tr key={record._id}>
      <td>{record.email}</td>
      <td>{record.foodType}</td>
      <td>{record.quantity}</td>
      <td>{record.inventoryType}</td>
      <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
    </tr>
    ))}

  </tbody>
</table>

        <Modal/>
        </div>
        </>
      )}
    </Layout>
  );
};

export default FoodStock;
