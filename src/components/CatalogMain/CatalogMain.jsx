import { useSelector } from "react-redux";
import TruckCard from "../components/TruckCard";
import { HashLoader } from "react-spinners";
import styles from "./CatalogMain.module.css";

function CatalogMain() {
  const { truckList, loading } = useSelector((state) => state.truck);

  return (
    <main>
      {loading && (
        <HashLoader
          color="#E44848"
          size="150px"
          cssOverride={{}}
          className={styles.loader}
        />
      )}
      <ul className={styles.truckList}>
        {truckList.length < 1 && !loading ? (
          <li>
            <h2 className={styles.noTruckText}>
              No truck found with this filters!
            </h2>
          </li>
        ) : (
          truckList.map((truck) => <TruckCard truck={truck} key={truck.id} />)
        )}
      </ul>
    </main>
  );
}

export default CatalogMain;
