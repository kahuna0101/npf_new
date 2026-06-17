"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export interface GalleryItem {
  id: string;
  title: string;
  event: string;
  category: string;
  year: string;
  gridImage: string;   // small / optimized
  fullImage: string;   // high quality
}

export default function GalleryGrid({
  images,
}: {
  images: GalleryItem[];
}) {
  const [selectedIndex, setSelectedIndex] = useState<
    number | null
  >(null);

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex + 1) % images.length
    );
  };

  const prevImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex - 1 + images.length) %
      images.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (
      e: KeyboardEvent
    ) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        closeLightbox();
      }

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [selectedIndex]);

  return (
    <>
      {/* Gallery Grid */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {images.map((item, index) => (
          <button
            key={item.id}
            onClick={() =>
              setSelectedIndex(index)
            }
            className="overflow-hidden rounded-xl"
          >
            <Image
              src={item.gridImage}
              alt={item.title}
              width={500}
              height={500}
              className="w-full h-60 object-cover cursor-pointer transition duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/95">

          {/* Close */}

          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 cursor-pointer text-white text-4xl z-50"
          >
            ×
          </button>

          {/* Previous */}

          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 cursor-pointer text-white text-5xl z-50"
          >
            ‹
          </button>

          {/* Next */}

          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 cursor-pointer text-white text-5xl z-50"
          >
            ›
          </button>

          {/* Main Image */}

          <div className="flex items-center justify-center w-full h-full px-12 py-20">
            <div className="relative w-full h-full max-w-7xl">
              <Image
                src={images[selectedIndex].fullImage}
                alt={images[selectedIndex].title}
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Title */}

          <div className="absolute bottom-28 left-0 right-0 text-center text-white font-semibold">
            {
              images[selectedIndex].title
            }
          </div>

          {/* Thumbnail */}

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw]">
            {images.map((img, index) => (
              <button
                key={img.id}
                onClick={() =>
                  setSelectedIndex(index)
                }
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded cursor-pointer overflow-hidden border-2 flex-shrink-0 ${selectedIndex === index
                  ? "border-white"
                  : "border-transparent"
                  }`}
              >
                <Image
                  src={img.gridImage}
                  alt={img.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}