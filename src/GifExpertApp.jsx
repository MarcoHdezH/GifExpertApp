
import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/addCategory';

const GifExpertApp = () => {

   const [categories,setCategories] =useState(['One Punch','Goku']);

   const onAddCategory = () =>{
        setCategories([...categories,'Valorant']);
   }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory/>

        {/* Listado de Items */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            {categories.map(category=>{
                    return <li key={category}>{category}</li>
                })
            }
        </ol>
    </>

  )
}

export default GifExpertApp
