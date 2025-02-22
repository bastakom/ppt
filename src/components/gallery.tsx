"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryProps {
  images: string[];
  content: {
    load_more_btn: string;
    load_btn: string;
  };
}

export const Gallery = ({ images, content }: GalleryProps) => {
  const [visibleImages, setVisibleImages] = useState(4);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    setLoading(true);

    setTimeout(() => {
      setVisibleImages((prev) => prev + 4);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div className="flex justify-center mt-16 lg:mt-20 mr-auto">
        <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4 gap-2 max-w-[100%]">
          {images.slice(0, visibleImages).map((el: any, index: number) => {
            return (
              <div
                key={index}
                className="relative !w-[85vw] mb-4 md:mb-0 md:!w-[42vw] lg:!w-[20.6vw] h-[50vh] group"
              >
                <Image
                  src={el.img.filename}
                  layout="fill"
                  className="object-cover transition-all duration-300 ease-in-out"
                  alt={el.img.alt}
                />

                {el.sublime && el.title && (
                  <div className="absolute top-0 left-0 w-full h-full bg-[#004e70] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                <div className="absolute top-0 left-0 w-full h-full text-center  text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <h3 className="mb-2 text-[18px] font-bold">{el.title}</h3>
                  <span className="text-[14px] text-center p-4">
                    {el.sublime}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {visibleImages < images.length && (
        <div className="flex justify-center mt-6">
          <button
            className="button-rounded"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? `${content.load_btn}` : `${content.load_more_btn}`}
          </button>
        </div>
      )}
    </div>
  );
};
