import styles from "./topRating.module.scss";
import TopRatingSlider from "@/components/topRating/TopRatingSlider";
import { TopRatingSliderItem } from "@/types/topRating";

const items: TopRatingSliderItem[] = [
  {
    id: 1,
    poster: "/images/6/poster.png",
  },
  {
    id: 2,
    poster: "/images/7/poster.png",
  },
  {
    id: 3,
    poster: "/images/8/poster.png",
  },
  {
    id: 4,
    poster: "/images/2/poster.png",
  },
  {
    id: 5,
    poster: "/images/4/poster.png",
  },
];

export default function TopRating() {
  return (
    <div className={styles.topRating}>
      <div className={styles.topRating__header}>
        <h3 className={styles.topRating__header__highlight}>топ-10</h3>
        <p className={styles.topRating__header__text}>просмотров за неделю</p>
      </div>

      <TopRatingSlider items={items} />
    </div>
  );
}
