import { Metadata } from "next";

import Image from "next/legacy/image";
import { UIButton } from "@/components/ui";
import { CatalogSlider } from "@/components/catalog/CatalogSlider";

import styles from "./page.module.scss";
import { CatalogSliderItemType } from "@/types/catalog";

export const metadata: Metadata = {
  title: "Главная страница | Фильмы и сериалы на любой вкус",
  description: "Фильмы и сериалы на любой вкус",
};

const catalogItems: CatalogSliderItemType[] = [
  {
    id: 1,
    title: "Синий жук",
    poster: "/images/2/poster.png",
    rating: "10",
  },
  {
    id: 2,
    title: "Домашняя игра",
    poster: "/images/3/poster.png",
    rating: "6,9",
  },
  {
    id: 3,
    title: "Салют 7",
    poster: "/images/4/poster.png",
    rating: "5,8",
  },
  {
    id: 4,
    title: "Поймай меня, если сможешь",
    poster: "/images/5/poster.jpeg",
    rating: "7,0",
  },
];

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.main__banner}>
        <div className={styles.main__banner__block}>
          <div className={styles.main__banner__titleImage}>
            <Image
              src="/images/1/title.png"
              alt="banner"
              layout="fill"
              objectFit={"contain"}
            />
          </div>

          <p className={styles.main__banner__description}>
            Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему
            в седле.
          </p>

          <div className={styles.main__banner__buttons}>
            <UIButton
              className={styles.main__banner__buttons__button}
              variant={"primary"}
            >
              Смотреть
            </UIButton>
            <UIButton
              className={styles.main__banner__buttons__button}
              variant={"secondary"}
            >
              О фильме
            </UIButton>
          </div>
        </div>
      </div>

      <CatalogSlider items={catalogItems} title={"Новинки"} />
    </div>
  );
}
