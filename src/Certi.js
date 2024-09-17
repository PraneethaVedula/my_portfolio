import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Certi = ()=>{
  
     const Certifications = [
        {
            title: "AWS Certified Cloud Practitioner",
            by:"Amazon",
            description:
            " ",
            image: './amazon.jpg' 
          },
        {
          title: " MERN Full Stack",
          by:"Ethnus" ,
          description:
            " ",
            image: './ethnus.jpg' 
        },
        {
            title: "Machine Learning with Python",
            by:"Edx",
            description:
            " ",
            image: './edx_ibm.jpg'
          },
        {
          title: "Introduction to Gen AI and Prompt Engineering",
          by:"AWS",
          description:
          " ",
          image: './aws.jpg'
        },
        {
          title: "App Development",
          by:"Bharat Intern",
          description:
            " ",
          image: './bharat_intern.jpg' },
          {
              title: "Introduction to Programming in C",
              by:"NPTEL",
              description:
              " ",
              image: './nptel.jpg' 
            },
  
        ];
    return(
        <>
        <Link to="/" ><h4 className='mt-5 ms-3'>PRANEETHA VEDULA /Certifications</h4></Link> 
        <div className='d-flex flex-wrap px-5 py-5 justify-content-center align-items-center '>

         {Certifications.map((a,i)=>{
             
             return <>
            <div key={i} className='Certi-box d-flex flex-column border border-light rounded my-3 mx-3 col-lg-5 p-4 col-sm-10 justify-content-center align-items-center gap-3'>
                <h3 >
            <i className='fa-solid fa-award mx-2'>
            </i>
                    {a.title}</h3>
                <h3>
                    Presented by:  {a.by}
                </h3>
                <img src={a.image} alt='No certificate at the moment'></img>
                <p>{a.description}</p>
            </div>

            </>
         })}
         </div> 
        </>
    )
}
export default Certi;
