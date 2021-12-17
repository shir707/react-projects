import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const[index,setIndex]=useState(0);
  const{name,job,image,text}=people[index];

  const checkNumber=(number)=>{
    //if the number is bigger than the last number in the aray return the first num in the array
    if(number>people.length-1){
      return 0;
    }
    //if the number is less then 0 so return the last in the array
    if(number<0){
      return people.length-1;
    }
    return number;
  };

  const nextPerson=()=>{
    setIndex((index)=>{
      let newIndex=index+1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson=()=>{
    //we will get a random random between 0 to 4
    //we did floor in order to get values between 0 to 3
    let randomNumber=Math.floor(Math.random()*people.length); 
    //in order to not return about the last object 
    //so the pictures will change any time
    if(randomNumber===index){
      randomNumber=index+1;
    }
    setIndex(checkNumber(randomNumber)); //we update the index with the random number
  }
  return (<article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img'></img>
      <span className='quote-icon'>
        <FaChevronRight></FaChevronRight>
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft></FaChevronLeft>
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight></FaChevronRight>
      </button>
    </div>
    <button className='random-btn' onClick={randomPerson}>
      suprise me
    </button>
    </article>
  );
    
};

export default Review;
