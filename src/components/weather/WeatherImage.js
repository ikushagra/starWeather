import React from 'react'
import { VscDash } from "react-icons/vsc";
import { BiCloudRain,BiCloudSnow } from "react-icons/bi";
import { RiHazeLine,RiDrizzleLine,RiMistLine } from "react-icons/ri";
import { AiOutlineCloud } from "react-icons/ai";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GiFog } from "react-icons/gi";
import { WiSmoke } from "react-icons/wi";
import './weather-image.css'



export default function WeatherImage({weatherData}){
let weathertype = weatherData.weather[0].main
if(weathertype === "Haze"){
    return(
        <div className = 'weather-image-container'>
        <RiHazeLine className="weather-icon"/>
        <div>{weathertype}</div>
        </div>
    )
}else if(weathertype === 'Clouds'){
    return(
        <div className = 'weather-image-container'>
        <AiOutlineCloud className="weather-icon"/>
        <div>{weathertype}</div>
        </div>
    )
}else if(weathertype === 'Sunny'){
    return(
        <div className = 'weather-image-container'>
        <TiWeatherPartlySunny className="weather-icon"/>
        <div>{weathertype}</div>
        </div>
    )
}else if(weathertype === 'Rain'){
    return(
        <div className = 'weather-image-container'>
        <BiCloudRain className="weather-icon"/>
        <div>{weathertype}</div>
        </div>
)}
else if(weathertype === 'Snow'){
    return(
        <div className = 'weather-image-container'>
        <BiCloudSnow className="weather-icon"/>
        <div>{weathertype}</div>
        </div>
)}else if(weathertype === 'Drizzle'){
        return(
            <div className = 'weather-image-container'>
            <RiDrizzleLine className="weather-icon"/>
            <div>{weathertype}</div>
            </div>
        )}
        else if(weathertype === 'Mist'){
            return(
                <div className = 'weather-image-container'>
                <RiMistLine className="weather-icon"/>
                <div>{weathertype}</div>
                </div>
            )}
            else if(weathertype === 'Smoke'){
                return(
                    <div className = 'weather-image-container'>
                    <WiSmoke className="weather-icon"/>
                    <div>{weathertype}</div>
                    </div>
                )}
                else if(weathertype === 'Fog'){
                    return(
                        <div className = 'weather-image-container'>
                        <GiFog className="weather-icon"/>
                        <div>{weathertype}</div>
                        </div>
                    )}else{
    return(
        <div className = 'weather-image-container'>
            <VscDash className="weather-icon"/>
            <div>{weathertype}</div>
        </div>
    )
}
}