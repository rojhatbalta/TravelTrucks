import styles from "./TruckDetailList.module.css";

function TruckDetailList({ truck }) {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        Form <span>{truck.form[0].toUpperCase() + truck.form.slice(1)}</span>
      </li>
      <li className={styles.item}>
        Length <span>{truck.length}</span>
      </li>
      <li className={styles.item}>
        Width <span>{truck.width}</span>
      </li>
      <li className={styles.item}>
        Height <span>{truck.height}</span>
      </li>
      <li className={styles.item}>
        Tank <span>{truck.tank}</span>
      </li>
      <li className={styles.item}>
        Consumption <span>{truck.consumption}</span>
      </li>
    </ul>
  );
}

export default TruckDetailList;
