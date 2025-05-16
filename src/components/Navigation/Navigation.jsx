import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <header>
      <nav className={styles.navbar}>
        <NavLink to="/" className="logo">
          <img src="../../assets/img/logo.png" alt="TravelTrucks logo" />
        </NavLink>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
