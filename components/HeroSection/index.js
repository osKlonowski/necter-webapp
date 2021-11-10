import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <>
      <div className={styles.herocontainer}>
        <div className={styles.herobg}>
          <video autoPlay muted className={styles.videobg}>
            <source src="/videos/necter-promo.mp4" type="video/mp4" />
            Your browser does not support the videos
          </video>
        </div>
      </div>
    </>
  );
}
