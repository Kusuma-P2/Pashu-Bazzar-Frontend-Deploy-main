import React from "react";
import { Link } from "react-router-dom";
import {useGlobalAuthContext } from "../../AuthContext"

import "./Hero.css";
const Hero = () => {
  const {translate} = useGlobalAuthContext();
  const [translateLang] = translate

  const content = {
    desc: {"en": "Buy your heart out","hi": "अपना दिल खरीदें"},
    sell: {"en": "Sell","hi": "बेचना"},
    buy: {"en": "Buy","hi": "ख़रीद"},
  }

  return (
    <div>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Pashu Bazar</h1>
          <p>{content.desc[translateLang]}</p>
          <div className="btnContainer">
            <Link
              to="/buy"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <button className="btn-default">{content.buy[translateLang]}</button>
            </Link>
            <Link
              to="/sell"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <button className="btn-default">{content.sell[translateLang]}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
