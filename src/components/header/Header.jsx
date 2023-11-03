import logo from "../../image/logo.png";
import location from "../../image/location.svg";

import styles from "./Header.module.css";
import React, { useState } from "react";

function Header({ handleLocation }) {
  const [citySearch, setCityHandler] = useState("");

  function onClickChange() {
    handleLocation(citySearch);
    setCityHandler("");
  }

  function handleChange(event) {
    setCityHandler(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleLocation(citySearch);
      setCityHandler("");
    }
  }

  return (
    <section className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <img src={logo} alt="" />
      </div>
      <div>
        <nav className={styles.headerNav}>
          <ul className={styles.headerNavbar}>
            <li>home</li>
            <li>news</li>
            <li>contact</li>
            <li>offer</li>
          </ul>
        </nav>
      </div>
      <div className={styles.headerSearch}>
        <div className={styles.headerInput}>
          <input
            type="text"
            placeholder="Location"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            value={citySearch}
          />
          <button onClick={onClickChange}>
            <img src={location} alt="" type="submit" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
