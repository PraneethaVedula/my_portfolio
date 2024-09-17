import React from 'react';
import { Link } from 'react-router-dom';

const Techstack = ()=>{
    const skills = [
        {
          name: "Java",
          icon: "fa-2xl mt-2 fab fa-java",
        },
        {
          name: "Python",
          icon: "fa-2xl mt-2 fab fa-python",
        },
        {
          name: "R",
          icon: "fa-2xl mt-2 fab fa-r-project",
        },
        {
          name: "HTML",
          icon: "fa-2xl mt-2 fab fa-html5",
        },
        {
          name: "CSS",
          icon: "fa-2xl mt-2 fab fa-css3",
        },
        {
          name: "SQL",
          icon: "fa-2xl mt-2 fas fa-database",
        },
        {
          name: "Android Development",
          icon: "fa-2xl mt-2 fab fa-android",
        },
        {
          name: "React.js",
          icon: "fa-2xl mt-2 fab fa-js",
        },
        {
          name: "Bootstrap",
          icon: "fa-2xl mt-2 fab fa-bootstrap",
        },
        {
          name: "Javascript",
          icon: "fa-2xl mt-2 fab fa-js",
        },
        {
          name: "Problem Solving",
          icon: "fa-2xl mt-2 fas fa-puzzle-piece",
        },
        {
          name: "DSA ",
          icon: "fa-2xl mt-2 fas fa-code",
        },
      ];   
    return(
        <>
        <Link to="/" ><h4 className='mt-5 ms-3'>PRANEETHA VEDULA/Skills</h4></Link> 
        <div className='d-flex flex-wrap px-5 py-5 justify-content-center align-items-center '>
         {skills.map((a,i)=>{
             return <>
            <div key={i} className='prize-box d-flex flex-column border border-light rounded my-3 mx-3 col-lg-3 p-4 col-sm-5 justify-content-center align-items-center gap-3'>
            <i className={a.icon}></i>
                <h4 >{a.name}</h4>
            </div>

            </>
         })}
         </div> 
        </>
    )
}
export default Techstack;
    
    
    
    
    
  