import React from 'react'
import './location.css'



export default function WeatherImage({weatherData}){
    return(
        <div className="location-container">
            
            {weatherData.name},{weatherData.sys.country}
        </div>
    )
}