import React from 'react';
import { Link } from 'react-router-dom';

const Work = ()=>{
    const projects = [
        {
          title: "MERN Stack Internship by Ethnus",
          description:
            "Developed TaskPilot, a sophisticated personal scheduler built on the MERN stack to optimise task organization and scheduling efficiency.",
          link:""
        },
        {
          title: "Health Care App",
          description:
            "Designed an Android application to facilitate the purchase of medicines, scheduling of doctor appointments, and access to a curated library of health articles, improving healthcare accessibility.",
          link:""
        },
        {
          title: "Music Genre Classification using Deep Learning",
          description:
            "Applied Deep Learning techniques to proficiently classify music genres. Achieved an 84% classification accuracy by integrating complex audio features with ANN, significantly improving the system's performance",
          link:""
        },
        {
            title: "Research Paper",
            description:
              "Worked with my professor to write a research paper on 'Product Recommendation' that focused on the use of machine learning algorithms to provide product recommendations.",
            link :""
            }
      ];
      
    return(
        <>
        <Link to="/" ><h4 className='mt-5 ms-3'>PRANEETHA VEDULA /Projects</h4></Link> 
        <div className='container d-flex justify-content-center align-items-center flex-column'>
        {projects.map((a,i)=>{
             
             return <>
            <div key={i} className='prize-box d-flex flex-column border border-light rounded my-3 mx-3 col-lg-10 p-4 col-sm-10 justify-content-center align-items-center gap-3'>
                <h3 >
            <i className='fa-solid fa-lightbulb mx-2'>
            </i>
                    {a.title}</h3>
                <p>{a.description}</p>
                {a.link !== "" ? (
                <p><a href={a.link} target='_blank'>Link</a> </p>) : (<></>)}
            </div>

            </>
         })}
        </div>
        
        
        </>
    )
}
export default Work;
    
    
    
    
    
  