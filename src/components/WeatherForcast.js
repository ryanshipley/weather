import React from "react";

const WeatherForecast = ({img, condition, time}) =>{
    return(
        <div>
            <img src={img}/>
            <h4>conditions: {condition}</h4>
            <h4>time: {time}</h4>
        </div>
    )
};

export default WeatherForecast;