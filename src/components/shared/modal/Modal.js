import React,{useState} from 'react';
import InputType from '../Form/InputType';
import API from './../../../services/API';
import { useSelector } from 'react-redux';

const Modal = () => {
  const [inventoryType, setInventoryType] = useState('Donated');
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [email, setEmail] = useState("");
  const {user} = useSelector(state=>state.auth);

  const handleInventorytype = (e)=>{
    setInventoryType(e.target.value);
    setEmail("");
  };
  
  const emailLabel = inventoryType === "Donated"?'Donor Email':"Charitable-Trust's Email";

  const handleModalSubmit = async() => {
    try{
      if(!foodType || !quantity){
        return alert("Provide all Details");
      }
      const {data} = await API.post('/inventory/create-inventory', {
        email,
        Organisation: user?._id,
        inventoryType,
        foodType,
        quantity
      });
      if(data?.success){
        alert("The Food Stock Data has been Saved");
        window.location.reload();
      }
    }catch(error){
      alert(error.response.data.message);
      console.log(error);
      window.location.reload();
    }
  };

  return (
    <>
    {/* Modal */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Food Stock Manager</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <select className="form-select mt-1 mb-3" aria-label="Default select example" onChange={(e)=>setFoodType(e.target.value)}>
          <option defaultValue={'Food Type'}>Food Type</option>
          <option value={"Rice Items (kg)"}>Rice Items (kg)</option>
          <option value={"Breakfast Items (kg)"}>Breakfast Items (kg)</option>
          <option value={"Snacks Items (kg)"}>Snacks Items (kg)</option>
          <option value={"Juices and Beverages (l)"}>Juices and Beverages (l)</option>
        </select>

        <div className='d-flex ms-5 mt-3 mb-3'>
          Food Transaction Type : &nbsp;
          <div className='form-check ms-3'>
            <input type='radio' name='inBox' defaultChecked 
            value={'Donated'}
            onChange={handleInventorytype}
            className='form-check-input'/>
            <label htmlFor='Donated' className='form-check-label'>
            Donation
          </label>
          </div> 
          <div className='form-check ms-3'>
            <input type='radio' name='inBox'  
            value={'Delivered'}
            onChange={handleInventorytype}
            className='form-check-input'/>
            <label htmlFor='Delivered' className='form-check-label'>
            Delivery
          </label>
          </div>
        </div>

        <InputType labelText={emailLabel} labelFor={'email'} inputType={'email'} value={email}
        onChange={(e)=>setEmail(e.target.value)}/>

        <InputType labelText={"Quantity"} labelFor={'quantity'} inputType={'Number'} value={quantity}
        onChange={(e)=>setQuantity(e.target.value)}/>
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-color" onClick={handleModalSubmit}>Submit</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Modal;