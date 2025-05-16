import Svg from "../Svg/Svg";
import styles from "./Feature.module.css";
import svgStyles from "../Svg/Svg.module.css";

function FeatureBox({ iconName, text }) {
  return (
    <li className={styles.box}>
      <Svg className={svgStyles.iconMedium} iconName={iconName} />
      <p>{text}</p>
    </li>
  );
}

export default FeatureBox;
