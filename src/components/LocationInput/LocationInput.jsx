import { useState } from "react";
import Svg from "./Svg";
import { useDispatch } from "react-redux";
import { updateFilters } from "../redux/filterSlice";
import styles from "./LocationInput.module.css";
import svgStyles from "./Svg.module.css";

function LocationInput() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(updateFilters({ location: e.target.value }));
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor="location" className={styles.label}>
        Location
      </label>
      <div className={styles.inputBox}>
        <Svg className={svgStyles.iconMedium} iconName="map" />
        <input
          value={value}
          onChange={handleChange}
          type="text"
          name="location"
          id="location"
          className={styles.input}
          placeholder="Enter a location"
        />
      </div>
    </div>
  );
}

export default LocationInput;
