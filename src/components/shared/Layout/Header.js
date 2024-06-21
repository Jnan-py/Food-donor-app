import React from 'react';
import { IoFastFoodSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

const Header = () => {
    const {user} = useSelector(state=>state.auth);
    const navigate = useNavigate();
    const handleLogout = () =>{
        localStorage.clear();
        alert("Logged Out Successfully");
        navigate("/login");
    };

  return (
    <>
        <nav className='navbar'>
            <div className='container-fluid'>
                <div className='navbar-brand'>
                    <h4><IoFastFoodSharp color='white'/>       Food Harmony -- Donation Management App</h4></div>
                <ul className='navbar-nav flex-row'>
                    <li className='nav-item mx-3'>
                        <p className='nav-link'>
                            <h5><MdAccountCircle /> {user?.name || user?.organisationName || user?.trustsName} &nbsp;
                            <span className="badge text-bg-secondary">{user?.role}</span></h5>
                        </p>
                    </li>
                    <li className='nav-item mx-3'>
                        <button className='btn btn-color' onClick={handleLogout}>LogOut</button>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  );
};

export default Header;