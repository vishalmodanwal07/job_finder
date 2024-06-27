import React from 'react'
import dayjs from 'dayjs';
import Button from '@mui/material/Button';

function Jobcard(props) {
    // const skills = ["javascript","React","HTML"];
    const date1= dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn,'day');
  return (
    <div className='mx-40 mb-4'>
      <div className='flex justify-between items-center mt-10 px-6 py-4 bg-white border border-blue-500 rounded-xl shadow-lg hover:border-black hover:translate-y-1 hover:scale-106'>
           <div>
               <div className='flex flex-col item-start gap-3'>
                <h1 className='text-lg font-semibold'>{props.title}-{props.company}</h1>
                <p>{props.type} &#x2022; {props.experience} &#x2022; In-Office</p>
               </div>
               <div className='flex items-center gap-2 m-3'>
                 {props.skills.map((skill)=>(
                    <p key={skill} className='text-blue-400 flex items-center px-1 py-2 border border-black rounded-lg'>{skill}</p>
                 ))}
               </div>
           </div>
           <div className='flex items-center gap-3'>
             <p> &#x2022; posted {diffInDays > 1?  `${diffInDays} days` : `${diffInDays} day`}   ago</p>
             <a href= {props.job_link}> <Button variant="contained" color="success"> Apply </Button> </a>
           </div>
          
       </div>
    </div>
    
)
}


export default Jobcard
