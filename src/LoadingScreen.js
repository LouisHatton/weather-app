import React from "react";
import LottieAnimation from "./Lottie";
import "./LoadingScreen.css";
import loader from "./animation/73718-loading-circle-animation.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

function loadingScreen({ apiErr }) {
  return (
    <div className="LoadingScreen">
      {!apiErr && <LottieAnimation lotti={loader} height={300} width={300} />}
      {apiErr && (
        <p>
          <span>
            <FontAwesomeIcon icon={faExclamation} />
          </span>
          {apiErr?.message}
        </p>
      )}
    </div>
  );
}

export default loadingScreen;
