"use client";

import styles from "@/app/page.module.scss";
import Image from "next/legacy/image";
import { UIButton } from "@/components/ui";
import { CatalogSlider } from "@/components/catalog/CatalogSlider";
import TopRating from "@/components/topRating/TopRating";
import { CatalogSliderItemType } from "@/types/catalog";
import { ReactLenis } from "@studio-freight/react-lenis";

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
  {
    id: 5,
    title: "Blue жук",
    poster: "/images/2/poster.png",
    rating: "9",
  },
];

export default function HomePageComponent() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.125,
        duration: 0.3,
      }}
    >
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
              Неувядающий авантюрист и пытливый археолог-исследователь
              по‑прежнему в седле.
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

        <TopRating />
      </div>
    </ReactLenis>
  );
}
