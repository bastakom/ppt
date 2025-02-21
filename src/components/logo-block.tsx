"use client";

import { NewsLetterForm } from "@/app/components/form/news-letter-form";
import Image from "next/image";
import { Settings } from "./utils/interface";

interface LogoBlock {
  blok: {
    title: string;
    logo_block: Element[];
  };

  settings: Settings;
  lang: any;
}

interface Element {
  img: {
    filename: string;
    alt: string;
  };
}

export const LogoBlock = ({ blok, settings, lang }: LogoBlock) => {
  const { title, logo_block } = blok;
  return (
    <div className="mt-20">
      <NewsLetterForm settings={settings} lang={lang} />
      <h2 className="text-center mt-20">{title}</h2>
      <div className="flex justify-center items-center gap-4 px-4 lg:px-0 lg:mb-20">
        {logo_block.map((el: Element) => {
          return (
            <div key={el.img.filename} className="relative w-[250px] h-[140px]">
              <Image
                src={el.img.filename}
                layout="fill"
                className="object-contain"
                alt={el.img.alt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
