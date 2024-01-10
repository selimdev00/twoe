"use client";

import { TopRatingSliderItem } from "@/types/topRating";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import styles from "./topRatingSlider.module.scss";

export default function TopRatingSlider({
  items,
}: {
  items: TopRatingSliderItem[];
}) {
  return (
    <Swiper slidesPerView={2.75} spaceBetween={110} className={styles.slider}>
      {items.map((item, index) => (
        <SwiperSlide key={item.id}>
          <div className={styles.slider__item}>
            <div className={styles.slider__item__index}>
              <span>{index + 1}</span>
            </div>

            <div className={styles.slider__item__image}>
              <Image
                src={item.poster}
                alt={`poster-${item.id}`}
                fill
                sizes="(max-width: 768px) 100%"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
