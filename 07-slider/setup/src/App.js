import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const[people,setPeople]=useState(data);
  const[index,setIndex]=useState(0);

//this useeffect run when our index changes and people is changing
  useEffect(()=>{
    const lastIndex=people.length-1; //the last index in the array
    if(index<0){
      setIndex(lastIndex);
    }
    if(index>lastIndex){
      setIndex(0);
    }
  },[index,people]);
//every time the index will change we set the rool
  useEffect(()=>{
   let slider= setInterval(()=>{
      //in 3 seconds while the index changes i want to see the last slide
      //we need the cleanup function we want to clean the previous one
      //i dont want to do it every time i clicked
      setIndex(index+1);
    },3000);
    return ()=>clearInterval(slider); //we want to clean and after 3 seconds will be automatic 
  },[index]);

  return (
  <section className='section'>
    <div className='title'>
      <h2>
        <span>/</span>
        reviews
      </h2>
      </div> 
      <div className='section-center'>
        {people.map((person,personIndex)=>{
          const{id,image,name,title,quote}=person;
          let position='nextSlide';
          //we checking if the current index is equal to the index- and the first people in the data
          //will be show in the center
          if(personIndex===index){
            position='activeSlide';
          }
          //we have to do two conditions be zero
          //in condition 1 we move the one who active to the left
          //in condition 2 we checking for the intialize value(0) we plassing the last item in the left
          if(personIndex===index-1 || (index===0 && personIndex===people.length-1)){
            position='lastSlide';
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img'/>
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon'/>
            </article>
          );

        })}
        <button className='prev' onClick={()=>setIndex(index-1)}>
          <FiChevronLeft/>
        </button>
         <button className='next'onClick={()=>setIndex(index+1)}>
          <FiChevronRight/>
        </button>
      </div>
    </section>
   
    );
}

export default App;
