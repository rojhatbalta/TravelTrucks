import { useEffect } from "react";
import CatalogMain from "../../components/CatalogMain/CatalogMain";
import CatalogSideBar from "../../components/CatalogSideBar/CatalogSideBar";
import Navigation from "../../components/Navigation/Navigation";
import { Toaster } from "react-hot-toast";
import useFetchAndDispatch from "../../hooks/useFetchAndDispatch";
import styles from "./CatalogPage.module.css";

function CatalogPage() {
  const fetchAndDispatch = useFetchAndDispatch();

  useEffect(() => {
    const fetchAndDispatchTrukcs = async () => {
      await fetchAndDispatch();
    };
    fetchAndDispatchTrukcs();
  }, [fetchAndDispatch]);

  return (
    <>
      <Toaster />
      <Navigation />
      <div className={styles.container}>
        <CatalogSideBar />
        <CatalogMain />
      </div>
    </>
  );
}

export default CatalogPage;
