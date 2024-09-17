import React from 'react';
import { Link } from 'react-router-dom';
const Grid1 = ()=>{
    return <>
       <div className='col-lg-3 grid-black col-md-6 col-sm-12 d-flex flex-column align-items-start rounded py-3'>
       <Link to="/" ><h1 className='name'>PRANEETHA VEDULA </h1></Link>

        <div className='d-flex flex-column justify-content-end align-items-start gap-5'>
            <p className='mb-5'>Exploring the world of web development with a passion for innovation & technology.</p>
            <p><i className='fas fa-location-dot mt-5'></i> Guntur, Andhra Pradesh</p>
            </div>

     </div>
    </>
}
export default Grid1;
