import React, { useState } from "react";

// ** IMG IMPORTS ** //
import sun from "./resources/sun.png";
import moon from "./resources/moon.png";
import cloudySun from "./resources/cloudy_sun.png";
import cloudyMoon from "./resources/cloudy_moon.png";
import clouds from "./resources/clouds.png";
import fog from "./resources/fog.png";
import rainDay from "./resources/rain_day.png";
import rainNight from "./resources/rain_night.png";
import snow from "./resources/snow.png";
import thunder from "./resources/thunder.png";
import rainLight from "./resources/light_rain.png";
import rainHeavy from "./resources/heavy_rain.png";

function WeatherImg({ data }) {
  let isDay = true;
  data.current.is_day === 1 ? (isDay = true) : (isDay = false);
  let code = data.current.condition.code;

  let imgLoc;

  // *****************
  // 'resources/weatherConditions.json' contains all info:
  // *****************

  if (code === 1000) {
    isDay ? (imgLoc = sun) : (imgLoc = moon);
  } else if (code === 1003) {
    isDay ? (imgLoc = cloudySun) : (imgLoc = cloudyMoon);
  } else if (code === 1006 || code === 1009) {
    isDay ? (imgLoc = clouds) : (imgLoc = cloudyMoon);
  } else if (code === 1030 || code === 1135 || code === 1147) {
    imgLoc = fog;
  } else if (
    code === 1063 ||
    code === 1069 ||
    code === 1072 ||
    code === 1150 ||
    code === 1180
  ) {
    isDay ? (imgLoc = rainDay) : (imgLoc = rainNight);
  } else if (
    code === 1066 ||
    code === 1114 ||
    code === 1117 ||
    code === 1210 ||
    code === 1213 ||
    code === 1216 ||
    code === 1219 ||
    code === 1222 ||
    code === 1225 ||
    code === 1237 ||
    code === 1249 ||
    code === 1252 ||
    code === 1255 ||
    code === 1258 ||
    code === 1261 ||
    code === 1264 ||
    code === 1168
  ) {
    imgLoc = snow;
  } else if (
    code === 1087 ||
    code === 1273 ||
    code === 1276 ||
    code === 1279 ||
    code === 1282
  ) {
    imgLoc = thunder;
  } else if (
    code === 1153 ||
    code === 1183 ||
    code === 1198 ||
    code === 1204 ||
    code === 1240
  ) {
    imgLoc = rainLight;
  } else if (
    code === 1171 ||
    code === 1186 ||
    code === 1189 ||
    code === 1192 ||
    code === 1195 ||
    code === 1201 ||
    code === 1207 ||
    code === 1243 ||
    code === 1246
  ) {
    imgLoc = rainHeavy;
  }
  return (
    <img
      src={imgLoc}
      alt={data.current.condition.text + " Icon"}
      className="weatherImg"
    />
  );
}

export default WeatherImg;
