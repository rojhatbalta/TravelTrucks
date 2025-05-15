import { useDispatch } from "react-redux";
import { setLoading, setTruckList } from "../redux/truckSlice";
import { useCallback } from "react";
import { fetchTrucks } from "../utils/fetchTrucks";
import toast from "react-hot-toast";

function useFetchAndDispatch() {
  const dispatch = useDispatch();

  const fetchAndDispatch = useCallback(
    async (params = {}) => {
      try {
        dispatch(setLoading(true));
        const trucks = await fetchTrucks(params);
        dispatch(setTruckList(trucks.items));
      } catch (e) {
        dispatch(setTruckList([]));
        toast.error(e.message);
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch]
  );

  return fetchAndDispatch;
}

export default useFetchAndDispatch;
