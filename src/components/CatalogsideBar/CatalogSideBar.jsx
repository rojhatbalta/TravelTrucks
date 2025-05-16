import LocationInput from "../LocationInput/LocationInput";
import FilterBox from "../FilterBox/FilterBox";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import useFetchAndDispatch from "../../hooks/useFetchAndDispatch";
import styles from "./CatalogSideBar.module.css";

function CatalogSideBar() {
  const filterObj = useSelector((state) => state.filter);
  const fetchAndDispatch = useFetchAndDispatch();

  function handleSearch() {
    fetchAndDispatch(filterObj);
  }

  return (
    <aside className={styles.sidebar}>
      <div>
        <LocationInput />
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Filters</h2>
        <div>
          <h3 className={styles.subheading}>Vehicle equipment</h3>
          <div className={styles.divider}></div>
          <ul className={styles.filterList}>
            <FilterBox
              iconName="ac"
              text="AC"
              filterName="ac"
              filterValue="true"
            />
            <FilterBox
              iconName="automatic"
              text="Automatic"
              filterName="transmission"
              filterValue="automatic"
            />
            <FilterBox
              iconName="kitchen"
              text="Kitchen"
              filterName="kitchen"
              filterValue="true"
            />
            <FilterBox
              iconName="tv"
              text="TV"
              filterName="tv"
              filterValue="true"
            />
            <FilterBox
              iconName="bathroom"
              text="Bathroom"
              filterName="bathroom"
              filterValue="true"
            />
          </ul>
        </div>
        <div>
          <h3 className={styles.subheading}>Vehicle type</h3>
          <div className={styles.divider}></div>

          <ul className={styles.filterList}>
            <FilterBox
              iconName="van"
              text="Van"
              filterName="form"
              filterValue="van"
            />
            <FilterBox
              iconName="fully-integrated"
              text="Fully Integrated"
              filterName="form"
              filterValue="fullyIntegrated"
            />
            <FilterBox
              iconName="alcove"
              text="Alcove"
              filterName="form"
              filterValue="alcove"
            />
          </ul>
        </div>
        <Button
          text="Search"
          className={styles.searchButton}
          onClick={handleSearch}
        />
      </div>
    </aside>
  );
}

export default CatalogSideBar;
