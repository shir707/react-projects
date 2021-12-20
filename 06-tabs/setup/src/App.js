import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const[loading,setLoading]=useState(true);
  const[jobs,setJobs]=useState([]);
  //we are looking for the first in the array so we pass 0 into the value
  const[value,setValue]=useState(0);

  const fetchJobs=async()=>{
    const response=await fetch(url);
    const newJobs=await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
//we want to run this function when we re-render
  useEffect(()=>{
    fetchJobs();
  },[]);

  if(loading){
    return(
      <section className='section loading'>
        <h1>loading...</h1>
      </section>
    );
  }
  //we want any time when we click on the button to change the value and display another job
  const {company,dates,duties,title}=jobs[value];
  return (
  <section className='section'>
    <div className='title'>
      <h2>experience</h2>
      <div className='underline'></div>
    </div>  
    <div className='jobs-center'>
      {/*btn container- here we change the state value to the index in the array so it will show the correct job by clicking on the buttton*/}
      {/*if the index of the button matches the current state value so i want to do it active button with focus */}
      <div className='btn-container'>
        {
          jobs.map((item,index)=>{
            return <button key={item.id} onClick={()=>setValue(index)}
            className={`job-btn ${index===value && 'active-btn'}`}>{item.company}</button>
          })};
      </div>
      <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className='job-date'>{dates}</p>
        {duties.map((duty,index)=>{
          return (
            <div key={index} className='job-desc'>
              <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          );
        })}
      </article>
    </div>
  </section>
  );
}

export default App
