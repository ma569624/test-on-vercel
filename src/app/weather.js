'use client'
import React, { useEffect, useState } from 'react'

const Weather = (props) => {
    const [weatherData, setWeatherData] = useState(null);
    const [airQualityData, setAirQualityData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        function getLocation() {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                const roundedLatitude = latitude.toFixed(1);
                const roundedLongitude = longitude.toFixed(1);
                console.warn(roundedLatitude);
                console.warn(roundedLongitude);
                getAirQualityData(roundedLatitude, roundedLongitude);
                getWeatherData(roundedLatitude, roundedLongitude)
            }, (error) => {
                console.error('Error getting user location:', error);
                setLoading(false);
            });
        }

        getLocation()

        async function getWeatherData(latitude, longitude) {
            const apiKey = '10acd1b6b55a38588b92aeb14b28a003';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                const data = await response.json();
                setLoading(false)
                setWeatherData(data)
                return data;
            } catch (error) {
                console.error('Error fetching weather data:', error);
                throw error;
            }
        }
        async function getAirQualityData(latitude, longitude) {
            const apiUrl = `https://api.openaq.org/v1/latest?coordinates=${latitude},${longitude}`;

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch air quality data');
                }
                const data = await response.json();
                setLoading(false);
                setAirQualityData(data);
            } catch (error) {
                console.error('Error fetching air quality data:', error);
                setLoading(false);
            }
        }


    }, []);

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
                <img clas src={iconUrl} alt="Weather Icon" />
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