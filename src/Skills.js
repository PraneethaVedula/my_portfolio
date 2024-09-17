import React from 'react';
import { Link } from 'react-router-dom';
const Skills = ()=>{
    return <>
     <div className='col-lg-4 photo color_border col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center rounded py-3'>
     <Link to="./Techstack">
     <img src="./skills.png" alt="My Portfolio" />
     </Link>
     <p className='my-3'>Skills</p>
     </div>
    </>
}
export default Skills;

