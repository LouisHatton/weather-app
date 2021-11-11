import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import WeatherImg from "./WeatherImg";
import "./DisplayScreen.css";
import Nav from "./Nav";

function DisplayScreen() {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const apiBase = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

  const [url, setUrl] = useState(`${apiBase}&q=London&aqi=no`);
  const [data, setData] = useState();
  const [searchText, setSearchText] = useState("");
  const [apiErr, setApiErr] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setApiErr(err);
        setData(null);
        console.log("There was an error: ");
        console.log(err);
      });
  }, [url]);

  return (
    <div className="displayScreen">
      <Nav
        handleClick={(e) => {
          e.preventDefault();
          if (searchText !== "") {
            setUrl(`${apiBase}&q=${searchText}&aqi=no`);
          }
        }}
        searchVal={(val) => {
          setSearchText(val);
        }}
      />
      {data && (
        <div className="displayScreen__currentInfo">
          <WeatherImg data={data} />
          <div className="displayScreen__currentContent">
            <h1>{data.location.name + ", " + data.location.region}</h1>
            <h3>{data.current.condition.text}</h3>
            <h2>
              {data.current.temp_c}
              <span>°C</span>
            </h2>
          </div>
        </div>
      )}
      {!data && <LoadingScreen apiErr={apiErr} />}
    </div>
  );
}

export default DisplayScreen;
