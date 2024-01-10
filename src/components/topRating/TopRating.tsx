import styles from "./topRating.module.scss";

export default function TopRating() {
  return (
    <div className={styles.topRating}>
      <div className={styles.topRating__header}>
        <h3 className={styles.topRating__header__highlight}>топ-10</h3>
        <p className={styles.topRating__header__text}>просмотров за неделю</p>
      </div>
    </div>
  );
}
