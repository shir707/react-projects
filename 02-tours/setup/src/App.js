import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const[loading,setLoading]=useState(true); //in the start we see the loading component
  const[tours,setTours]=useState([]);

  //even if we start the loading with false, when you start fetching it will be true
  const fetchTours=async()=>{
    setLoading(true);
    try{
      const response = await fetch(url); //to get the API
      const tours = await response.json(); //to give us a list of tours
      setLoading(false);
      setTours(tours);
    }catch(error){
      setLoading(false);
      console.log(error);
    }
  };
  //we need it to run once in the beginning
  useEffect(()=>{
    fetchTours();
  },[]);
  if(loading){
    return (<main>
      <Loading></Loading>
    </main>);
  }
  return( <main>
    <Tours tours={tours}></Tours>

  </main>
  );
}

export default App
