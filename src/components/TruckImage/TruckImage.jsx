import styles from "./TruckImage.module.css";

function TruckImage({ url, alt }) {
  return (
    <li>
      <img src={url} alt={`${alt} image`} className={styles.image} />
    </li>
  );
}

export default TruckImage;
