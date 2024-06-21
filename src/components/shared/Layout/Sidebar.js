import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../styles/Layout.css';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const location = useLocation();
    const {user} = useSelector(state=>state.auth);

  return (
    <div>
      <div className='sidebar'>
        <div className='menu '>
          {user?.role === 'Organisation' && (
            <>
                <i className="fa-solid fa-house-user"></i>
                <Link to='/home-org'>Home</Link>
            <div className={`menu-item ${location.pathname==='/food-stock' && 'active'}`}>
                <i className="fa-solid fa-box-archive"></i>
                <Link to='/food-stock'>Food Stock</Link>
            </div>
            <div className={`menu-item ${location.pathname==='/donor' && 'active'}`}>
                <i className="fa-solid fa-hand-holding-hand"></i>
                <Link to='/donor'>Donors</Link>
            </div>
            <div className={`menu-item ${location.pathname==='/trust' && 'active'}`}>
                <i className="fa-solid fa-dove"></i>
                <Link to='/trust'>Charitable Trust</Link>
            </div>
            <div className={`menu-item ${location.pathname==='/all-donor' && 'active'}`}>
                <i className="fa-solid fa-hand-holding-hand"></i>
                <Link to='/all-donor'>All Donors</Link>
            </div>
            <div className={`menu-item ${location.pathname==='/all-trust' && 'active'}`}>
                <i className="fa-solid fa-dove"></i>
                <Link to='/all-trust'>All Charitable Trust</Link>
            </div>
            <div className={`menu-item ${location.pathname==='/overview' && 'active'}`}>
                <i className="fa-solid fa-chart-line"></i>
                <Link to='/overview'>Overview</Link>
            </div>
            </>
          )}
          {user?.role === 'Admin' && (
            <>
            <div className={`menu-item ${location.pathname==='/admin' && 'active'}`}>
                <i className="fa-solid fa-house-user"></i>
                <Link to='/admin'>Home</Link>
            </div>
            <div className={`menu-item ${location.pathname==='/donor-list' && 'active'}`}>
                <i className="fa-solid fa-box-archive"></i>
                <Link to='/donor-list'>Donors List</Link>
            </div>
            <div className={`menu-item ${location.pathname==='/trust-list' && 'active'}`}>
                <i className="fa-solid fa-hand-holding-hand"></i>
                <Link to='/trust-list'>Charity-Trusts List</Link>
            </div>
            <div className={`menu-item ${location.pathname==='/org-list' && 'active'}`}>
                <i className="fa-solid fa-dove"></i>
                <Link to='/org-list'>Organisations List</Link>
            </div>
            </>
          )}
          {user?.role === "CharitableTrusts"  && (
            <>
            <div className={`menu-item ${location.pathname==='/home-trust' && 'active'}`}>
                <i className="fa-solid fa-house-user"></i>
                <Link to='/home-trust'>Home</Link>
            </div>
            <div className={`menu-item ${location.pathname==='/organisation' && 'active'}`}>
              <i className="fa-solid fa-warehouse"></i>
              <Link to='/organisation'>Organisations</Link>
            </div>
            <div className={`menu-item ${location.pathname==='/consumer' && 'active'}`}>
              <i className="fa-solid fa-user"></i>
              <Link to='/consumer'>Consumer</Link>
            </div>
            <div className={`menu-item ${location.pathname==='/all-organisation' && 'active'}`}>
              <i className="fa-solid fa-warehouse"></i>
              <Link to='/all-organisation'>All Organisations</Link>
            </div>
            </>
          )}
          {user?.role==="Donor" && (
            <>
            <div className={`menu-item ${location.pathname==='/home-donor' && 'active'}`}>
                <i className="fa-solid fa-house-user"></i>
                <Link to='/home-donor'>Home</Link>
            </div>
            <div className={`menu-item ${location.pathname==='/all-organisation' && 'active'}`}>
              <i className="fa-solid fa-warehouse"></i>
              <Link to='/all-organisation'>All Organisations</Link>
            </div>
            <div className={`menu-item ${location.pathname==='/organisation' && 'active'}`}>
              <i className="fa-solid fa-warehouse"></i>
              <Link to='/organisation'>Organisations</Link>
            </div>
            <div className={`menu-item ${location.pathname==='/donation' && 'active'}`}>
              <i className="fa-solid fa-hand-holding-hand"></i>
              <Link to='/donation'>Donations</Link>
            </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
