import logo from "../../image/logo.png";
import location from "../../image/location.svg";

import styles from "./Header.module.css";

function Header() {
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
          <input type="text" placeholder="Location" />
          <img src={location} alt="" type="submit"/>
        </div>
      </div>
    </section>
  );
}

export default Header;
