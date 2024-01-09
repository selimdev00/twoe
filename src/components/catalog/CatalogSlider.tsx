"use client";

import { CatalogSliderItem } from "@/components/catalog/CatalogSliderItem";

import { CatalogSliderItemType } from "@/types/catalog";

import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
export const CatalogSlider = ({
  items,
  title,
}: {
  items: CatalogSliderItemType[];
  title?: string;
}) => {
  return (
    <div>
      {title && <h2>{title}</h2>}

      <Swiper modules={[Virtual]} slidesPerView={4} virtual>
        {items
          ? items.map((item, index) => (
              <SwiperSlide key={item.id} virtualIndex={index}>
                <CatalogSliderItem {...item} />
              </SwiperSlide>
            ))
          : "No items"}
      </Swiper>
    </div>
  );
};
