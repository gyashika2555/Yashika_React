import React, { useEffect, useState } from "react";

const Forecast = ({ city }) => {
  const [data, setData] = useState([]);

  const API_KEY = "YOUR_API_KEY";

  useEffect(() => {
    const fetchForecast = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const json = await res.json();

      const filtered = json.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );

      setData(filtered);
    };
    fetchForecast();
  }, [city]);

  return (
    <div className="forecast-section">
      <h2>5-Day Forecast</h2>
      <div className="forecast-grid">
        {data.map((d, i) => (
          <div className="forecast-card" key={i}>
            <p className="f-date">{d.dt_txt.split(" ")[0]}</p>
            <p className="f-temp">{Math.round(d.main.temp)}°C</p>
            <p className="f-desc">{d.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
