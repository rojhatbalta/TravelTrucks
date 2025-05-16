import Svg from "./Svg";
import styles from "./FeatureBox.module.css";
import svgStyles from "./Svg.module.css";

function FeatureBox({ iconName, text }) {
  return (
    <li className={styles.box}>
      <Svg className={svgStyles.iconMedium} iconName={iconName} />
      <p>{text}</p>
    </li>
  );
}

export default FeatureBox;
