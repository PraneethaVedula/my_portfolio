import React from 'react';
import { Link } from 'react-router-dom';
// import img1 from "./images/Praneethaportfolio.jpg";
const Photo = ()=>{
    return <>
     <div className='col-lg-3 photo col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center rounded py-3'>
        <Link to="/About">
     <img src= './praneetha.jpg' alt="My Portfolio" />
        </Link>
     <p className='my-3'>Final year student at VIT-AP</p>
     </div>
    </>
}
export default Photo;
