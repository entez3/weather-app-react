import React, { useState } from "react";
import axios from "axios";

import "./styles/responsive.css";
import "./styles/custom.css";
import "./styles/App.css";

// import { useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("tehran");
  let [status, setStatus] = useState(200);
  // console.log(data);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6f4d9c29a7d5640079237e06f218211c`;
  const getApi = () => {
    axios
      .get(url)
      .then((res) => {
        setStatus(200);

        // status = res;
        setData(res.data);
        console.log(res.data);
      })
      // .then((res)=>{setStatus(res.status)})

      .catch(() => {
        document.getElementById("alert").innerHTML =
          "There is no such city in the database or something went wrong, please try again";
        console.log(Error);
        setStatus(404);
      });
  };

  const fristData = () => {
    if (data.length === 0) {
      getApi();
    }
  };
  const searchLocation = (e) => {
    if (e.keyCode === 13) {
      getApi();
    }
  };

  const backGround = (description) => {
    let res;
    switch (description) {
      case "Clouds":
        res = "app cloudy";
        break;
      case "rainy":
        res = "app rainy";
        break;
      default:
        res = "app";
    }
    return res;
  };

  // useEffect(() => {
  //   axios
  //     .get(api)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch(console.log(Error));
  // }, [location]);
  fristData();

  return (
    <div className={data.weather?(backGround(data.weather[0].main)):'app'}>
      <div className="container">
        <div className="row main">
          <div className="col-12 search">
            <input
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              onKeyDown={searchLocation}
              type="text"
              placeholder="Search location"
            />
            <p className={status === 200 ? "d-none" : "d-flex"} id="alert"></p>
          </div>


          <div className="col-12 description">
            <div>{}</div>
            <div className="col-6 desc-item degree">
              <h2>{data.name}</h2>
              {data.main ? <h1>{data.main.temp}°C</h1> : null}
            </div>
            <div className="col-6 desc-item conditions">
              {data.weather ? <p>{data.weather[0].description} </p> : null}
            </div>
          </div>
        </div>
        <footer className="row">
          <div className="col-10 d-flex footer-container">
            <div className="col-4 footer-items">
              {data.main ? <h4>{data.main.feels_like}°C</h4> : null}
              <p>Feels Like</p>
            </div>
            <div className="col-4 footer-items">
              {data.main ? <h4>{data.main.humidity}%</h4> : null}
              <p>Humidity</p>
            </div>
            <div className="col-4 footer-items">
              {data.wind ? <h4>{data.wind.speed} MPH</h4> : null}
              <p>Winds</p>
            </div>
          </div>
          {console.log(status)}
        </footer>
      </div>
    </div>
  );
};

export default App;
