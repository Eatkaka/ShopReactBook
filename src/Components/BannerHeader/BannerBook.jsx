import React, { useRef } from 'react';
import ApiBannerBook from '../../FakeApi/ApiBannerBook';
import { useState,useEffect } from 'react';
import './style.css'
export default function BannerBook() {
    const [indexSlider,setIndexSlider]=useState(0)
    const timeoutRef = useRef(null)
    const resetTimeout = () =>{
          if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
          }
    }
    
    useEffect(() => {
      setTimeout(()=>{
            setIndexSlider(indexSlider + 1);
            if(indexSlider===3){
                setIndexSlider(0)
            
        }
      },10000)
    
      return () => {
        resetTimeout();
      }
    }, [indexSlider])
    
   
  return (
    <div className='banner'>
      <img className="imgBanner" src={ApiBannerBook[indexSlider].anh} alt=""/>
        <div className="textbanner"><h1>{ApiBannerBook[indexSlider].content}</h1></div>
    </div>
  )
}
