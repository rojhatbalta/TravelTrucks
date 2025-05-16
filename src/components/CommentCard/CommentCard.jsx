import Svg from "./Svg";
import styles from "./CommentCard.module.css";
import svgStyles from "./Svg.module.css";

function CommentCard({ review }) {
  const maxReview = [1, 2, 3, 4, 5];

  return (
    <li className={styles.card}>
      <div className={styles.header}>
        <p className={styles.avatar}>{review.reviewer_name[0]}</p>
        <div>
          <p>{review.reviewer_name}</p>
          <ul className={styles.rating}>
            {maxReview.map((_, i) =>
              i + 1 <= review.reviewer_rating ? (
                <li key={`filled-${i}`}>
                  <Svg iconName="filled-star" className={svgStyles.iconSmall} />
                </li>
              ) : (
                <li key={`empty-${i}`}>
                  <Svg iconName="empty-star" className={svgStyles.iconSmall} />
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <p className={styles.comment}>{review.comment}</p>
    </li>
  );
}

export default CommentCard;
