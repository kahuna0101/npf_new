"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState, useRef } from "react";
import OpenAccountButtons from "../OpenAccountButtons";

export const ImagesSlider = ({
  images,
  title,
  description,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  title: string[];
  description: string[];

  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down" | "left" | "right";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  // touch refs for mobile swipe
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const SWIPE_THRESHOLD = 50; // px

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStartXRef.current = t.clientX;
    touchStartYRef.current = t.clientY;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchEndXRef.current = t.clientX;
  };

  const handleTouchEnd = () => {
    const startX = touchStartXRef.current;
    const endX = touchEndXRef.current;
    const startY = touchStartYRef.current;
    if (startX == null || endX == null || startY == null) return;

    const dx = endX - startX;
    const dy = (touchEndXRef.current && startY) ? 0 : 0; // minimal vertical check not to block scroll
    // simple horizontal swipe detection
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dy) < 100) {
      if (dx < 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
    touchStartYRef.current = null;
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages as string[]);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load images", error));
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
    leftExit: {
      opacity: 1,
      x: "-150%",
      transition: {
        duration: 1,
      },
    },
    rightExit: {
      opacity: 1,
      x: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  // helper to split title into first 3 words and rest
  const splitTitle = (t?: string) => {
    const text = (t ?? "").trim();
    if (!text) return { first: "", rest: "" };
    const words = text.split(/\s+/);
    const first = words.slice(0, 3).join(" ");
    const rest = words.length > 3 ? words.slice(3).join(" ") : "";
    return { first, rest };
  };

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
      // mobile swipe handlers
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
        />
      )}
      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={
              direction === "up"
                ? "upExit"
                : direction === "down"
                ? "downExit"
                : direction === "left"
                ? "leftExit"
                : "rightExit"
            }
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center"
          />
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="absolute z-50 flex flex-col items-center justify-center md:gap-[30px] px-20 md:w-[90%] max-w-4xl md:h-[420px]"
          >
            {/* Title: first 3 words white, rest yellow */}
            {(() => {
              const raw = title?.[currentIndex] ?? "";
              const { first, rest } = splitTitle(raw);
              return (
                <h3
                  className="font-bold text-5xl sm:text-6xl text-center py-4">
                  <span className="text-white">{first}</span>
                  {rest ? (
                    <>
                      {" "}
                      <span className="text-yellow-100">{rest}</span>
                    </>
                  ) : null}
                </h3>
              );
            })()}

            <p
              className="font-medium text-xl text-white text-center py-4">
              {description?.[currentIndex]}
            </p>

            <OpenAccountButtons />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
