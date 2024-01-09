import { Metadata } from "next";

import Image from "next/legacy/image";
import { UIButton } from "@/components/ui";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Главная страница | Фильмы и сериалы на любой вкус",
  description: "Фильмы и сериалы на любой вкус",
};

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
    </div>
  );
}
