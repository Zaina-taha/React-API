import React, { useEffect, useState } from 'react'

export default function Resturant() {
    let[resturant,setResturant]=useState([]);
    let[carrot,setCarrot]=useState([]);
    let[broccoli,setBroccoli]=useState([]);


    const getResturant=async()=>{
    let response=await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    let data=await response.json();
    setResturant(data.recipes);
    }
    const getCarrot=async()=>{
        let response=await fetch('https://forkify-api.herokuapp.com/api/search?q=carrot');
        let data=await response.json();
        setCarrot(data.recipes);
        }
        const getBroccoli=async()=>{
            let response=await fetch('https://forkify-api.herokuapp.com/api/search?q=broccoli');
            let data=await response.json();
            setBroccoli(data.recipes);
            }
        useEffect(()=>{
            getResturant();
            
        },[])
    useEffect(()=>{
        getCarrot();
        
    },[])
    useEffect(()=>{
        getBroccoli();
        
    },[])
  return (
    <div className='row'>
        <div className='col-md-4'>
            <h2 className='pb-5 text-danger'>Pizza</h2>
        {resturant.map((ele,index)=>{
            return <div className='col-md-6' key={index}>
                <h2>{ele.publisher}</h2>
                <p>{ele.title}</p>
                <img src={ele.image_url} className='w-100 h-75' alt="pizza"/>
            </div>
        })}
        </div>
        <div className='col-md-4'>
        <h2 className='pb-5 text-danger'>Carrot</h2>
        {carrot.map((ele,index)=>{
            return <div className='col-md-6' key={index}>
                <h2>{ele.publisher}</h2>
                <p>{ele.title}</p>
                <img src={ele.image_url} className='w-100 h-75' alt="pizza"/>
            </div>
        })}
        </div>
        <div className='col-md-4'>
            <h2 className='pb-5 text-danger'>Broccoli</h2>
        {broccoli.map((ele,index)=>{
            return <div className='col-md-6' key={index}>
                <h2>{ele.publisher}</h2>
                <p>{ele.title}</p>
                <img src={ele.image_url} className='w-100 h-75' alt="pizza"/>
            </div>
        })}
        </div>
    </div>

  )
}
