import Navbar from './components/Navbar'
import Header from './components/Header'
import Searchbox from './components/Searchbox'
import Jobcard from './components/Jobcard'
import jobData from './components/JobDummyData'

import './App.css'
import { useEffect, useState } from 'react'
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import {db} from './firebase.config'

function App() {
     const [jobs, setJobs]= useState([]);
     const fetchJobs = async()=>{
      const tempJobs =[];
      const jobsRef = query(collection(db, "jobs"));
      const q = query(jobsRef , orderBy("postedOn" ,"desc"));
      const req = await getDocs(q);
      req.forEach((job) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        tempJobs.push({
          ...job.data(),
          id: job.id,
          postedOn:job.data().postedOn.toDate()
        })
        
      });
      setJobs(tempJobs);

     }

     useEffect(()=>{
      fetchJobs();
     },[])

  return (
    <>
    <div>
           <Navbar/>
           <Header/>
           <Searchbox/>
           {jobs.map((job)=>(
            <Jobcard key={job.id} {...job}/>
           ))}
           



    </div>
     
    </>
  )
}

export default App
