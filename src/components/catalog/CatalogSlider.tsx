"use client";

import { CatalogSliderItem } from "@/components/catalog/CatalogSliderItem";

import { CatalogSliderItemType } from "@/types/catalog";

import styles from "./catalogSlider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export const CatalogSlider = ({
  items,
  title,
}: {
  items: CatalogSliderItemType[];
  title?: string;
}) => {
  return (
    <div className={styles.slider}>
      {title && <h2 className={styles.slider__title}>{title}</h2>}

      <Swiper
        slidesPerView={3.9}
        spaceBetween={50}
        className={styles.slider__swiper}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id}>
            <CatalogSliderItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
