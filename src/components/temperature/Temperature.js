import React from 'react'
import './temperature.css'
import { RiCelsiusLine } from "react-icons/ri";

export default function Temperature({weatherData}){


    return(
        
        <div className = "temperature-container">
            <div className='current-temp'>{weatherData.main.temp} <RiCelsiusLine/>  </div>
          <div className="min-max">
            <div className="min-temp">min {weatherData.main.temp_min}</div>
            <div className="max-temp">max {weatherData.main.temp_max}</div>
          </div>

        </div>
    )
}