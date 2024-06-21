import React from "react";
import "../styles/NotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (<div className="pnf">
          <img src='./assets/images/404_.png' alt='404 IMAGE' className="img404"/>
      
        <button className='btn btn-color1' type='submit' >
            <Link to="/">Home Page</Link>
          </button>
    </div>)
}
export default PageNotFound;