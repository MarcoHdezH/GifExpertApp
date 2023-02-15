import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid } from './components/';

const GifExpertApp = () => {

   const [categories,setCategories] =useState(['Valorant']);

   const onAddCategory = (newCategory) =>{

      if(categories.includes(newCategory))return;        
      setCategories([newCategory,...categories]);
   }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            onNewCategory = { ( value )=> onAddCategory( value )}
        />

        {
            categories.map((category)=>(
                <GifGrid 
                    key={category} 
                    category={category}
                />
            ))
        }
    </>
  )
}

export default GifExpertApp
