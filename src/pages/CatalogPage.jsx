import { useEffect } from "react";
import CatalogMain from "../components/CatalogMain/CatalogMain";
import CatalogSideBar from "../components/CatalogSideBar/CatalogSideBar";
import Navigation from "../components/Navigation/Navigation";
import { Toaster } from "react-hot-toast";
import useFetchAndDispatch from "../hooks/useFetchAndDispatch";

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
      <div>
        <CatalogSideBar />
        <CatalogMain />
      </div>
    </>
  );
}

export default CatalogPage;
