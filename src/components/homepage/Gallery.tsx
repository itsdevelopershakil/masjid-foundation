"use client";

import { galleryImages } from "@/src/constants/galleryImages";
import { useAppContext } from "@/src/context/AppContext";
import { useRef } from "react";
import type { ImageGalleryRef } from "react-image-gallery";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";

const Gallery = () => {
  const galleryRef = useRef<ImageGalleryRef>(null);
  const { selectedLanguage: language } = useAppContext();
  const titleFont = language === "bn" ? "font-noirrit" : "font-philosopher";
  return (
    <section className="pt-15 md:pt-20">
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

        <div className="mt-6">
          <ImageGallery
            ref={galleryRef}
            items={galleryImages}
            showPlayButton={false}
            showFullscreenButton={false}
            showBullets={false}
            thumbnailPosition="bottom"
            slideDuration={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
