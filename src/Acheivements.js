import React from 'react';
import { Link } from 'react-router-dom';


const Achievements = ()=>{
    return <>
        <div className='col-lg-4 photo col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center rounded py-3'>
        <Link to= "/Prize">
        <img src=".\achievements.png" alt="My Portfolio" />
        </Link>
        <p className='my-3'>Achievements</p>
        </div>
    </>
}
export default Achievements;