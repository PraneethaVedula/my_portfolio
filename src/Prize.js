import React from 'react';
import { Link } from 'react-router-dom';

const Prize = ()=>{
    const achievements = [
        {
          title: "ACM Winter School",
          description:
            "Selected in the top 50 out of 1000+ applicants to attend the ACM Winter School at IIT Patna, focusing on cutting-edge insights on AI and ML, and Industry 4.0.Participated in workshops, seminars, and networking sessions with industry professionals and experts, enhancing knowledge and professional connections.",
          image: './brainathon.png' 
        },
        {
          title: "Amazon Summer School",
          description:
          "Selected among the top 3000 candidates for a prestigious 4-week program focusing on advanced topics in machine learning. Participated in 8 intensive classes covering supervised learning, deep neural networks, generative AI, and latest developments in LLMs (Large Language Models).",
          image: './sharktank.png'
        },
            {
              title: "Bug Rush",
              description:
                "Played a pivotal role in our team's impressive third-place finish in the Bug Rush competition. My keen eye for detail and expertise in identifying HTML, CSS, and JavaScript bugs helped resolve challenges in the NGC-organized event at VIT-AP.",
              image: "none" 
            }
        ];
    return(
        <>
        <Link to="/" ><h4 className='mt-5 ms-3'>PRANEETHA VEDULA /Achievements</h4></Link> 
        <div className='d-flex flex-wrap px-5 py-5 justify-content-center align-items-center '>

         {achievements.map((a,i)=>{
             
             return <>
            <div key={i} className='prize-box d-flex flex-column border border-light rounded my-3 mx-3 col-lg-5 p-4 col-sm-10 justify-content-center align-items-center gap-3'>
                <h3 >
            <i className='fa-solid fa-trophy mx-2'>
            </i>
                    {a.title}</h3>
                <img src={a.image} alt='No certificate at the moment'></img>
                <p>{a.description}</p>
            </div>

            </>
         })}
         </div> 
        </>
    )
}
export default Prize;
    
    
    
    
    
  