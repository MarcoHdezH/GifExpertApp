import React from "react";
import { useState , useEffect} from "react";
import {getGifs} from '../helpers/getGifs';
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./gifItem";


export const GifGrid = ({category}) =>{

    const { images, isLoading } = useFetchGifs ( category );

    return(
        <>
            <h3>{category}</h3>
            <div className="card-grid">
            {
                images.map((image)=>(
                    <GifItem 
                        key={image.id}
                        {...image}
                    />
                ))

            }
            </div>
        </>
    )
}