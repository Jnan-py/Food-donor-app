import React, {useState , useEffect} from 'react';
import Layout from '../../components/shared/Layout/Layout';
import API from '../../services/API';
import moment from 'moment';

const Analytics = () => {
    const [data, setData] = useState([]);
    const [foodType, setFoodType] = useState("");
    const [inventoryData, setInventoryData] = useState([]);

    const getFoodTypeData = async () =>{
        try{
            const {data} = await API.get('/inventory/analytics-data');
            if(data?.success){
                setData(data?.foodTypeData);
                console.log(data);
            }
        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        getFoodTypeData();
    },[]);

    const getRecentFoodTypeData = async () =>{
        try{
            const {data} = await API.get('/inventory/get-recent-inventory');
            if(data?.success){
                setInventoryData(data?.inventory);
                console.log(data);
            }
        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        getRecentFoodTypeData();
    },[]);

  const finData = data?.filter(record => record.foodType === foodType);
  return (
    <Layout>
        <>
        <div className='container'>
            <div className='ms-2 mt-4'>
            <h2>Amounts of Food Stock</h2>    
                    <select className="form-select mt-4" aria-label="Default select example" name='foodType' onChange={(e)=>setFoodType(e.target.value)}>
                    <option defaultValue={'Food Type'}>Food Type</option>
                    <option value={"Rice Items (kg)"}>Rice Items (kg)</option>
                    <option value={"Breakfast Items (kg)"}>Breakfast Items (kg)</option>
                    <option value={"Snacks Items (kg)"}>Snacks Items (kg)</option>
                    <option value={"Juices and Beverages (l)"}>Juices and Beverages (l)</option>
                    </select>
                    <table className="table table-dark table-striped table-hover mt-4">
                    <thead>
                        <tr>
                        <th scope="col">Food Type</th>
                        <th scope="col">Donated Amount</th>
                        <th scope="col">Delivered Amount</th>
                        <th scope="col">Remaining Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {finData?.map((record)=>(
                        <tr key={record._id}>
                        <td>{record.foodType}</td>
                        <td>{record.totalIn}</td>
                        <td>{record.totalOut}</td>
                        <td>{record.availableAmount}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
            <h2>Recent Transactions</h2>
            <table className="table table-dark table-striped table-hover mt-4">
                    <thead>
                        <tr>
                        <th scope="col">Food Type</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Transaction Type</th>
                        <th scope="col">E-Mail</th>
                        <th scope="col">Date and Time of Transaction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryData?.map((record)=>(
                        <tr key={record._id}>
                        <td>{record.foodType}</td>
                        <td>{record.quantity}</td>
                        <td>{record.inventoryType}</td>
                        <td>{record.email}</td>
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

export default Analytics;