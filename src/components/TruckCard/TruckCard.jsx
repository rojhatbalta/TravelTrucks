import { useDispatch, useSelector } from "react-redux";
import FeatureBox from "../FeatureBox/Feature";
import LinkButton from "../LinkButton/LinkButton";
import Svg from "../Svg/Svg";
import { toggleFavorite } from "../../redux/favouriteSlice";
import styles from "./TruckCard.module.css";
import svgStyles from "../Svg/Svg.module.css";

function calculateAvgRating(reviews) {
  if (!reviews || reviews.length === 0) return 0;
  const total = reviews.reduce(
    (sum, review) => sum + review.reviewer_rating,
    0
  );

  return total / reviews.length;
}

function TruckCard({ truck }) {
  const keys = Object.keys(truck);
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favourite.items);
  const isFav = favs.includes(truck.id);

  function handleFav(e) {
    dispatch(toggleFavorite(e.currentTarget.dataset.id));
  }

  return (
    <li className={styles.card}>
      <div className={styles.cardInner}>
        <img src={truck.gallery[0].thumb} alt="" className={styles.image} />
        <div className={styles.content}>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>{truck.name}</h2>
            <div
              className={styles.priceRow}
              data-id={truck.id}
              onClick={handleFav}
            >
              <h2 className={styles.title}>€{truck.price.toFixed(2)}</h2>
              <Svg
                cssClass={svgStyles.iconMedium}
                iconName={`${isFav ? "filled-hearth" : "empty-hearth"}`}
              />
            </div>
          </div>
          <div className={styles.ratingRow}>
            <div className={styles.subInfo}>
              <Svg cssClass={svgStyles.iconSmall} iconName="filled-star" />
              <p>
                {calculateAvgRating(truck.reviews)} ({truck.reviews.length}{" "}
                Reviews)
              </p>
            </div>
            <div className={styles.subInfo}>
              <Svg cssClass={svgStyles.iconSmall} iconName="map" />
              <p>{truck.location}</p>
            </div>
          </div>
          <p className={styles.description}>{truck.description}</p>
          <div>
            <ul className={styles.features}>
              {keys.map((key) =>
                truck[key] === true ? (
                  <FeatureBox
                    text={key[0].toUpperCase() + key.slice(1)}
                    iconName={key.toLowerCase()}
                    key={key}
                  />
                ) : null
              )}
              <FeatureBox text="Automatic" iconName="automatic" />
            </ul>
          </div>
          <LinkButton to={truck.id} text="Show more" type="Link" />
        </div>
      </div>
    </li>
  );
}

export default TruckCard;
