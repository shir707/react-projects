import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//we want to get all the name of the categories
//we use set in order to get only one time the specific category
//we want to get it in array
const allCategories=['all',...new Set(items.map((item)=>item.category))];
console.log(allCategories);

function App() {
  //here we get the json from the data and we send it as propery in the component below
  const[menuItems,setMenuItems]=useState(items);
  const[categories,setCategories]=useState(allCategories);

  //we filter the original list with the category
  const filterItems=(category)=>{
    //we want to display the all list
    if(category==='all'){
      setMenuItems(items);
      return;
    }
    //we will work with the original list
    const newItems=items.filter((item)=>item.category===category);
    setMenuItems(newItems);
  };

  return (
  <main>
   <section className='menu selection'>
     <div className='title'>
       <h2>our menu</h2>
       <div className='underline'></div>
     </div>
     <Categories categories={categories} filterItems={filterItems}/>
     <Menu items={menuItems}/>
   </section>
    </main>
  );
}

export default App;
