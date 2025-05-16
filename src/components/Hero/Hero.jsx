import LinkButton from "../LinkButton/LinkButton";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <main className={styles.hero}>
      <div className={styles.content}>
        <div>
          <h1 className={styles.heading1}>Campers of your dreams</h1>
          <h2 className={styles.heading2}>
            You can find everything you want in our catalog
          </h2>
        </div>
        <LinkButton to="/catalog" text="View Now" />
      </div>
    </main>
  );
}

export default Hero;
