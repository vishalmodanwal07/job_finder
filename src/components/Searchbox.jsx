import React from 'react'


function Searchbox() {
  return (
    <div className='flex'>
      <select className='w-64 py-3 mx-4 my-5 pl-4 font-bold bg-zinc-200 rounded-xl scroll-smooth-4'>
        <option value="" disabled hidden selected>Job Role</option>
        <option value="Frontend-developer">Frontend-developer</option>
        <option value="Backend-developer">Backend-developer</option>
        <option value="ios-developer">ios-developer</option>
        <option value="Android-developer">Android-developer</option>
        <option value="Java-developer">Java-developer</option>
        <option value="Bussines Analist">Bussiness Analist</option>
      </select>
      <select className='w-64 py-3 mx-4 my-5 pl-4 font-bold bg-zinc-200 rounded-xl'>
        <option value="" disabled hidden selected>Job Type</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select className='w-64 py-3 mx-4 my-5 pl-4 font-bold bg-zinc-200 rounded-xl'>
        <option value="" disabled hidden selected>Location</option>
        <option value="In-Office">In-Office</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select className='w-64 py-3 mx-4 my-5 pl-4 font-bold bg-zinc-200 rounded-xl'>
        <option value="" disabled hidden selected>Experience</option>
        <option value="Fresherr">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="iMid Level">Mid Level</option>
        <option value="Senior">Senior</option>
      </select>
      <button
        type="button"
        className=" flex rounded-xl w-64 bg-black py-3  mx-4 my-5 justify-center item-centre font-bold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Search
      </button>
         
      
    </div>
  )
}

export default Searchbox
