import React, { useState } from 'react';
import data from './data';
function App() {
  //how many paragraph i want
  const[count,setCount]=useState(0);
  const[text,setText]=useState([]);
  
  //we will change the value of the text when we did call this functoin
  const handleSubmit=(e)=>{
    //in order to prevent page refreshes
    e.preventDefault();
    let amount=parseInt(count); //wer'e getting back the string to a number
      //the problem is when we get for nagative or max values
    if(count<=0){
      amount=1;
    }
    if(count>8){
      amount=8; //the end value is not included
    }
    //we want to slice the data from index 0 to the amount 
    //and we get all the data that we asked for
    setText(data.slice(0,amount)); //give from index 0 to 7
  };

  return (
  <section className='section-center'>
    <h3>tired of boring lorem ipsum?</h3>   
    <form className='lorem-form' onSubmit={handleSubmit}>
    <label htmlFor="amount">
      paragraphs:
      </label>  
      <input type='number' name='amount' id='amount' value={count}
      onChange={(e)=>setCount(e.target.value)}/>
      <button type='submit' className='btn'>generate</button>
    </form> 
    <article className='lorem-text'>
      {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
    </article>
    </section>
  );
}

export default App;
