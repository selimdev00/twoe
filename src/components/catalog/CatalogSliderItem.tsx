import { CatalogSliderItemType } from "@/types/catalog";

import Image from "next/image";

import styles from "./catalogSliderItem.module.scss";

export const CatalogSliderItem = (props: CatalogSliderItemType) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <Image src={props.poster} alt={props.title} fill />
      </div>

      <h4 className={styles.item__title}>{props.title}</h4>

      <div className={styles.item__rating}>
        <span>{props.rating}</span>
      </div>
    </div>
  );
};
