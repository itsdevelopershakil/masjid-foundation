"use client";

import { useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { galleryImages } from "@/src/constants/galleryImages";
import Image from "next/image";

import { useAppContext } from "@/src/context/AppContext";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/thumbs";

export default function Gallery() {
  const { selectedLanguage: language } = useAppContext();
  const [mainSwiper, setMainSwiper] = useState<SwiperClass | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const titleFont = language === "bn" ? "font-noirrit" : "font-philosopher";

  return (
    <section className="pt-15 md:pt-20 scroll-mt-10" id="gallery">
      <div className="max-width">
        <div className="flex flex-col items-center gap-6">
          <h1
            className={`font-bold ${titleFont} text-[26px] lg:text-4xl text-primary`}
          >
            {language === "bn" ? "গ্যালারি" : "Gallery"}
          </h1>
          <h2 className="font-medium text-xl lg:text-2xl text-secondary hidden sm:block">
            {language === "bn"
              ? "আমাদের অগ্রযাত্রার কিছু মুহূর্ত"
              : "A Glimpse of Our Journey"}
          </h2>
        </div>
        <div className="mt-5 sm:mt-6">
          {/* Main Image */}
          <Swiper
            onSwiper={setMainSwiper}
            modules={[Thumbs]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            className="overflow-hidden rounded-xl"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-61 w-full sm:h-120 md:h-165">
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail Section */}
          <div className="mt-4 relative">
            {/* Left Arrow */}
            <button
              onClick={() => mainSwiper?.slidePrev()}
              className="absolute top-1/2 -translate-y-1/2 -left-2.5 xl:-left-4.75 z-10 flex size-9.5 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-container transition"
            >
              <IoIosArrowBack className="text-primary text-xl" />
            </button>

            {/* Thumbnails */}
            <div className="flex-1 overflow-hidden">
              <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs, FreeMode]}
                freeMode
                watchSlidesProgress
                slidesPerView={2}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 12,
                  },
                  600: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                  },
                }}
                className="gallery-thumbs"
              >
                {galleryImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative overflow-hidden rounded-xl h-32.5">
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 120px, 180px"
                        className="cursor-pointer object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => mainSwiper?.slideNext()}
              className="absolute top-1/2 -translate-y-1/2 -right-2.5 xl:-right-4.75 z-10 flex size-9.5 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-container transition"
            >
              <IoIosArrowForward className="text-primary text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
