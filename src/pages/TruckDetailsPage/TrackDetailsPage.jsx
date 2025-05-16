import Navigation from "../../components/Navigation/Navigation";
import FeatureBox from "../../components/FeatureBox/Feature";
import toast, { Toaster } from "react-hot-toast";
import TruckInfo from "../../components/TruckInfo/TruckInfo";
import TruckImage from "../../components/TruckImage/TruckImage";
import TruckDetailList from "../../components/TruckDetailList/TruckDetailList";
import BookForm from "../../components/BookForm/BookForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import { HashLoader } from "react-spinners";
import CommentCard from "../../components/CommentCard/CommentCard";
import styles from "./TrackDetailsPage.module.css";

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
      <div className={styles.pageWrapper}>
        <div className={styles.section}>
          <TruckInfo truck={truck} />

          <ul className={styles.imageList}>
            {truck.gallery.map((g) => (
              <TruckImage url={g.original} key={g.thumb} alt={truck.name} />
            ))}

            <TruckImage
              url={truck.gallery[0].original}
              key={truck.gallery[0].original}
              alt={truck.name}
            />
          </ul>

          <p className={styles.description}>{truck.description}</p>
        </div>

        <div className={styles.tabHeader}>
          <h3
            onClick={() => setStatus("details")}
            className={`${styles.tab} ${
              status === "details" ? styles.activeTab : ""
            }`}
          >
            Features
          </h3>
          <h3
            onClick={() => setStatus("comments")}
            className={`${styles.tab} ${
              status === "comments" ? styles.activeTab : ""
            }`}
          >
            Reviews
          </h3>
        </div>

        <div className={styles.tabHeader}>
          {status === "details" && (
            <div className={styles.detailsCard}>
              <ul className={styles.featureList}>
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
                <h3 className={styles.bookingTitle}>Vehicle details</h3>
                <div className="border-b border-[#DADDE1] my-[24px]"></div>
                <TruckDetailList truck={truck} />
              </div>
            </div>
          )}

          {status === "comments" && (
            <div className={styles.commentsCard}>
              <ul className={styles.commentList}>
                {truck.reviews.map((r) => (
                  <CommentCard key={`${r.comment}`} review={r} />
                ))}
              </ul>
            </div>
          )}

          <div className={styles.bookingBox}>
            <div className={styles.bookingInner}>
              <div>
                <h3 className={styles.bookingTitle}>Book your campervan now</h3>
                <p className={styles.bookingText}>
                  Stay connected! We are always ready to help you.
                </p>
              </div>
              <BookForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackDetailsPage;
