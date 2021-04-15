import React from 'react'
import './card.css'
import WeatherImage from './weather/WeatherImage'
import Temperature from './temperature/Temperature'
import Location from './location/Location'
export default function Card({weatherData}){
    if(weatherData.cod === "404"){
        return(
            <div>check your spelling!</div>
        )
    }
    return(
        <div className='card-wrapper'>
            <WeatherImage  weatherData={weatherData}/>
            <Temperature  weatherData={weatherData}/>
            <Location   weatherData={weatherData}/>
            
        </div>
    )
}