import Navigation from "../components/Navigation";
import FeatureBox from "../components/FeatureBox";
import toast, { Toaster } from "react-hot-toast";
import TruckInfo from "../components/TruckInfo";
import TruckImage from "../components/TruckImage";
import TruckDetailList from "../components/TruckDetailList";
import BookForm from "../components/BookForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { HashLoader } from "react-spinners";
import CommentCard from "../components/CommentCard";

function TrackDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [truck, setTruck] = useState(null);
  const keys = truck ? Object.keys(truck) : [];
  const [status, setStatus] = useState("details");

  useEffect(() => {
    const fetchTruck = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance(`/${id}`);
        setTruck(res.data);
      } catch (e) {
        toast.error(e.response.data);
        navigate("/catalog");
      } finally {
        setLoading(false);
      }
    };

    fetchTruck();
  }, [id, navigate]);

  if (loading || !truck)
    return (
      <HashLoader
        color="#E44848"
        size="150px"
        cssOverride={{ width: "100vw", height: "100vh" }}
      />
    );

  return (
    <>
      <Navigation />
      <Toaster />
      <div>
        <div>
          <TruckInfo truck={truck} />
          <ul>
            {truck.gallery.map((g) => (
              <TruckImage url={g.original} key={g.thumb} alt={truck.name} />
            ))}
            <TruckImage
              url={truck.gallery[0].original}
              key={truck.gallery[0].original}
              alt={truck.name}
            />
          </ul>
          <p>{truck.description}</p>
        </div>
        <div>
          <h3 onClick={() => setStatus("details")}>Features</h3>
          <h3 onClick={() => setStatus("comments")}>Reviews</h3>
        </div>
        <div>
          {status === "details" && (
            <div>
              <ul>
                {keys.map((key) =>
                  truck[key] === true ? (
                    <FeatureBox
                      text={key[0].toUpperCase() + key.slice(1)}
                      iconName={key.toLowerCase()}
                      key={key}
                    />
                  ) : null
                )}
              </ul>
              <div>
                <h3>Vehicle details</h3>
                <TruckDetailList truck={truck} />
              </div>
            </div>
          )}
          {status === "comments" && (
            <div>
              <ul>
                {truck.reviews.map((r) => (
                  <CommentCard key={`${r.comment}`} review={r} />
                ))}
              </ul>
            </div>
          )}

          <div>
            <div>
              <h3>Book your campervan now</h3>
              <p>Stay connected! We are always ready to help you.</p>
            </div>
            <BookForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackDetailsPage;
