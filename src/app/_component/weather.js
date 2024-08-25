'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

const Weather = (props) => {
    const [weatherData, setWeatherData] = useState(null);
    const [airQualityData, setAirQualityData] = useState(null);
    const [loading, setLoading] = useState(true);


    if (loading) {
        return <div>Loading...</div>;
    }


    if (!weatherData) {
        return <div>Weather data not available</div>;
    }
    // console.warn(weatherData);

    const { name: location, weather, main, wind } = weatherData;
    const description = weather && weather.length > 0 ? weather[0].description : 'Unknown';
    const temperatureCelsius = main.temp;
    const maxTemperatureCelsius = main.temp_max;
    const minTemperatureCelsius = main.temp_min;
    const iconCode = weather[0].icon;
    const humidity = main.humidity;
    const windSpeed = wind.speed;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    



    if (props.position == 'top') {
        return (

            <a className='hover-effect text-white d-grid'>
                Temperature:
                <span className='p-3'>Max: {maxTemperatureCelsius} °C</span>
                <span>Min: {maxTemperatureCelsius} °C</span>
            </a>

        )
    }
    return (
        <div >
            <div className="d-flex justify-content-center align-items-md-center">
                <Image width={200} height={200} src={iconUrl} alt="Weather Icon" />
                <p className='text-center mb-0' >{temperatureCelsius} °C</p>
            </div>
            <p className='text-center mb-0' >Temperature Max: {maxTemperatureCelsius} °C</p>
            <p className='text-center mb-0' >Temperature Min: {minTemperatureCelsius} °C</p>
            <p className='text-center mb-0'>Humidity: {humidity}%</p>
            <p className='text-center mb-0'>Wind Speed: {windSpeed} m/s</p>
        </div>
    )
}

export default Weather