import React from 'react';
import { Link } from 'react-router-dom';
const Projects = ()=>{
    return <>
     <div className='col-lg-4 photo col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center rounded py-3'>
     <Link to = "/Work">
     <img src="./projects.png" alt="My Portfolio" />
     </Link>
     <p className='my-3'>Projects</p>
     </div>
    </>
}
export default Projects;
