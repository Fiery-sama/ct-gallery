'use client';

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import db from "@/db/gallery.json";
import { motion } from "framer-motion";

type GalleryItem = {
  img: string;
  description: string;
  category: string;
};

export const Gallery = () => {
  const galleryData = db.gallery[0];

  const allImages: GalleryItem[] = Object.entries(galleryData).flatMap(
    ([category, images]) =>
      (images as Omit<GalleryItem, "category">[]).map((item) => ({
        ...item,
        category,
      }))
  );

  const categories = ["All", ...Object.keys(galleryData)];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const modalRef = useRef<HTMLDivElement>(null);

  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endY = e.changedTouches[0].clientY;
    if (touchStartY.current !== null && endY - touchStartY.current > 100) {
      handleClose();
    }
    touchStartY.current = null;
  };

  const handleClose = () => setSelectedImage(null);

  useEffect(() => {
    if (selectedImage && modalRef.current) {
      modalRef.current.focus();
    }
  }, [selectedImage]);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1,
  };

  return (
    <>

      <div className="w-screen p-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border text-md font-medium font-style-serif transition-colors ${selectedCategory === category
                ? "bg-lime-600 text-white"
                : "bg-gray-100 hover:bg-lime-200"
                }`}
            >
              {category.replace(/-/g, " ")}
            </button>
          ))}
        </div>

        {/* Masonry Layout */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {filteredImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg mb-4 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={`/img/${item.img}`}
                alt={item.description}
                width={500}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 hover:backdrop-blur-sm">
                <p className="text-white text-center md:text-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}

        </Masonry>

        {selectedImage && (
          <div
            ref={modalRef}
            tabIndex={-1}
            className="fixed h-screen top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={handleClose}
            onKeyDown={(e) => {
              if (e.key === "Escape") handleClose();
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
                aria-label="Close"
              >
                &times;
              </button>

              {/* Modal Image */}
              <motion.img
                src={`/img/${selectedImage.img}`}
                alt={selectedImage.description}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                width={650}
                height={500}
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </>

  );
};
