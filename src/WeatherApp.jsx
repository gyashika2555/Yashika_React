import React, { useState } from 'react'
import './WeatherApp.css'

const WeatherApp = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const API_KEY = "af9f63c59a649f27d602b96a43d0bd14";

    const getWeather = async () => {
        if (!city.trim()) {
            alert("Please enter a city name");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            const data = await res.json();

            if (data.cod === 200) {
                setWeather(data)
            } else {
                setWeather(null);
                alert("City not found");
            }
        } catch(error) {
            console.error("error fetching weather:", error)
            alert("Failed to fetch weather data");
        } finally {
            setLoading(false);
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            getWeather();
        }
    }

    const getWeatherEmoji = (main) => {
        const emojis = {
            'Clear': '☀️',
            'Clouds': '☁️',
            'Rain': '🌧️',
            'Drizzle': '🌦️',
            'Thunderstorm': '⛈️',
            'Snow': '❄️',
            'Mist': '🌫️',
            'Haze': '🌫️',
            'Fog': '🌫️'
        }
        return emojis[main] || '🌤️';
    }

    return (
        <div className="app-container">
            <div className="animated-bg">
                <div className="bubble bubble-1"></div>
                <div className="bubble bubble-2"></div>
                <div className="bubble bubble-3"></div>
                <div className="bubble bubble-4"></div>
                <div className="bubble bubble-5"></div>
                <div className="bubble bubble-6"></div>
            </div>

            <div className="main-card">
                <div className="card-glow"></div>
                
                <div className="header-section">
                    <div className="logo-container">
                        <div className="logo-circle">
                            <span className="logo-emoji">🌈</span>
                        </div>
                    </div>
                    <h1 className="main-title">Weather Vibes</h1>
                    <p className="tagline">✨ Discover the magic in every forecast ✨</p>
                </div>

                <div className="search-box-container">
                    <div className="search-wrapper">
                        <input 
                            type='text' 
                            placeholder='Enter city name...' 
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="modern-input"
                        />
                        <button 
                            onClick={getWeather} 
                            className="gradient-button"
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="loading-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            ) : (
                                <>
                                    <span className="button-text">Search</span>
                                    <span className="button-icon">🔍</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {weather && (
                    <div className="results-container">
                        <div className="weather-hero">
                            <div className="emoji-bounce">
                                {getWeatherEmoji(weather.weather[0].main)}
                            </div>
                            
                            <div className="location-display">
                                <h2 className="city-title">{weather.name}</h2>
                                <span className="country-badge">{weather.sys.country}</span>
                            </div>

                            <div className="temperature-hero">
                                <span className="temp-large">{Math.round(weather.main.temp)}</span>
                                <span className="degree-symbol">°C</span>
                            </div>

                            <div className="weather-desc">
                                {weather.weather[0].description}
                            </div>

                            <div className="feels-like-badge">
                                Feels like {Math.round(weather.main.feels_like)}°C
                            </div>
                        </div>

                        <div className="stats-container">
                            <div className="stat-card purple">
                                <div className="stat-icon-wrap">💧</div>
                                <div className="stat-content">
                                    <div className="stat-title">Humidity</div>
                                    <div className="stat-number">{weather.main.humidity}%</div>
                                </div>
                            </div>

                            <div className="stat-card blue">
                                <div className="stat-icon-wrap">💨</div>
                                <div className="stat-content">
                                    <div className="stat-title">Wind Speed</div>
                                    <div className="stat-number">{weather.wind.speed} m/s</div>
                                </div>
                            </div>

                            <div className="stat-card orange">
                                <div className="stat-icon-wrap">🌡️</div>
                                <div className="stat-content">
                                    <div className="stat-title">Pressure</div>
                                    <div className="stat-number">{weather.main.pressure} hPa</div>
                                </div>
                            </div>

                            <div className="stat-card green">
                                <div className="stat-icon-wrap">👁️</div>
                                <div className="stat-content">
                                    <div className="stat-title">Visibility</div>
                                    <div className="stat-number">{(weather.visibility / 1000).toFixed(1)} km</div>
                                </div>
                            </div>
                        </div>

                        <div className="minmax-display">
                            <div className="minmax-item">
                                <span className="minmax-emoji">🔽</span>
                                <span className="minmax-label">Min</span>
                                <span className="minmax-value">{Math.round(weather.main.temp_min)}°C</span>
                            </div>
                            <div className="divider-line"></div>
                            <div className="minmax-item">
                                <span className="minmax-emoji">🔼</span>
                                <span className="minmax-label">Max</span>
                                <span className="minmax-value">{Math.round(weather.main.temp_max)}°C</span>
                            </div>
                        </div>
                    </div>
                )}

                {!weather && !loading && (
                    <div className="empty-state">
                        <div className="empty-illustration">
                            <div className="cloud-emoji">☁️</div>
                            <div className="sun-emoji">🌤️</div>
                            <div className="rain-emoji">🌧️</div>
                        </div>
                        <h3 className="empty-title">Ready for Weather Magic?</h3>
                        <p className="empty-desc">Enter any city name and watch the magic happen! ✨</p>
                    </div>
                )}
            </div>

            <div className="footer-text">Made with 💖 by Weather Vibes</div>
        </div>
    )
}

export default WeatherApp
