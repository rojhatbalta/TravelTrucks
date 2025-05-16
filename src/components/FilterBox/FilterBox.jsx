import Svg from "../Svg/Svg";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../../redux/filterSlice";
import styles from "./FilterBox.module.css";
import svgStyles from "../Svg/Svg.module.css";

function FilterBox({ iconName, text, filterName, filterValue }) {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter[filterName]);
  const selected = filter === filterValue;

  function handleClick() {
    dispatch(updateFilters({ [filterName]: selected ? "" : filterValue }));
  }

  return (
    <li
      className={`${styles.box} ${selected ? styles.selected : ""}`}
      onClick={handleClick}
    >
      <Svg className={svgStyles.iconLarge} iconName={iconName} />
      <p>{text}</p>
    </li>
  );
}

export default FilterBox;
