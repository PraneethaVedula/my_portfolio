import React from 'react';
import { Link } from 'react-router-dom';
const About = ()=>{
    const education = [
        {
          institution: "VIT AP University, Amaravathi",
          period: "2021 - Present",
          degree: "B.Tech CSE spl in AI&ML",
          score: "CGPA - 8.92",
        },
        {
          institution: "Narayana Junior College",
          period: "2019 - 2021",
          degree:"XII",
          score: "968/1000",
        },
        {
          institution: "Narayana e-techno School",
          period: "2016 - 2019",
          degree:"X",
          score: "GPA - 10.0",
        },
      ];
      
    return<> 
    <Link to="/" ><h4 className='mt-4  ms-3'>PRANEETHA VEDULA /About</h4></Link>
    <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
        <div className=' about border border-light rounded px-5 py-4 m-5 col-10'>
        "Hi, I'm Praneetha, a final year Computer Science Engineering (CSE) student at VIT-AP University in Andhra Pradesh.
         I specialize in Artificial Intelligence (AI) and Machine Learning (ML). While pursuing my degree,
          I'm passionately exploring the world of cutting-edge technologies and their applications. 
          I have a solid foundation in programming, data structures, and algorithms, and I'm dedicated to refining my skills 
          and staying up-to-date with the latest advancements. Currently, I'm also delving into the world of web development."
        </div>
        <row className='d-flex flex-row gap-5 justify-content-center align-items-center px-5'>
        <div className='border education border-light rounded px-5 py-4 col-10 mb-5 col-lg-5 col-sm-9 ms-3'>
              <h2>Education</h2>
              {education.map((e)=>{
                  return <>
                    <div className='d-flex flex-column my-2 border-bottom border-light '>
                        <h5>{e.institution}</h5>
                        <p>Period: {e.period}</p>
                        <p>Degree: {e.degree}</p>
                        <p>Score: {e.score}</p>
                    </div>
                
                </>
              })
            }
        </div>
        

     </row>
    </div>
     </>

}
export default About;
