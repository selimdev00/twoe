import { CatalogSliderItemType } from "@/types/catalog";
import Image from "next/legacy/image";

import styles from "./catalogSliderItem.module.scss";

export const CatalogSliderItem = (props: CatalogSliderItemType) => {
  return (
    <div>
      <div className={styles.item__image}>
        <img src={props.poster} alt={props.title} width={300} height={450} />
      </div>

      <h4>{props.title}</h4>
    </div>
  );
};
