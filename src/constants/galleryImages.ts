import Image1 from "@/public/images/gallery/masjid-front-view.jpeg";
import Image2 from "@/public/images/gallery/masjid-full-view.png";
import Image3 from "@/public/images/gallery/masjid-interior-left-view.jpeg";
import Image4 from "@/public/images/gallery/masjid-interior.jpeg";
import Image5 from "@/public/images/gallery/masjid-left-view.jpeg";
import Image6 from "@/public/images/gallery/masjid-right-view.png";
import Image7 from "@/public/images/gallery/masjid-side-view.jpeg";

import type { GalleryItem } from "react-image-gallery";

export const galleryImages: GalleryItem[] = [
  {
    original: Image1.src,
    thumbnail: Image1.src,
  },
  {
    original: Image2.src,
    thumbnail: Image2.src,
  },
  {
    original: Image3.src,
    thumbnail: Image3.src,
  },
  {
    original: Image4.src,
    thumbnail: Image4.src,
  },
  {
    original: Image5.src,
    thumbnail: Image5.src,
  },
  {
    original: Image6.src,
    thumbnail: Image6.src,
  },
  {
    original: Image7.src,
    thumbnail: Image7.src,
  },
];
