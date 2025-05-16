import Svg from "../Svg/Svg";
import styles from "./TruckInfo.module.css";
import svgStyles from "../Svg/Svg.module.css";

function TruckInfo({ truck }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{truck.name}</h1>
      <div className={styles.infoRow}>
        <p className={styles.detail}>
          <Svg className={svgStyles.iconSmall} iconName="filled-star" />
          {`${truck.rating}(${truck.reviews.length} Reviews)`}
        </p>
        <p className={styles.location}>
          <Svg className={svgStyles.iconSmall} iconName="map" />
          Kyiv, Ukraine
        </p>
      </div>
      <h2 className={styles.price}>€{truck.price.toFixed(2)}</h2>
    </div>
  );
}

export default TruckInfo;
