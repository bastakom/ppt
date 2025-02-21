"use client";

import Image from "next/image";
import { Gallery } from "@/components/gallery";
import { render } from "storyblok-rich-text-react-renderer";
import { BookingForm } from "@/app/components/form/booking-form";
import { NewsLetterForm } from "@/app/components/form/news-letter-form";
import { TripsCard } from "./ui/trips-card";
import { Card } from "./card";
import { InfoBlock } from "./info-block";
import { Settings } from "./utils/interface";
import { PackageInfo } from "./ui/package-info";

interface PackagesProps {
  paket: ContentProps;

  resor: string[];

  lang: any;
  settings: Settings;
}

interface ContentProps {
  content: {
    hero: {
      alt: string;
      filename: string;
    };
    info_block_title: string;
    hero_title: string;
    heading: string;
    date: string;
    choose_dates: string;
    position: string;
    price: string;
    package_info: React.ReactNode[];
    info_block: any[];
    card: any;
    contact_title: string;
    contact_content: React.ReactNode[];
    gallery: string[];
    date_title: string;
    position_title: string;
    price_title: string;
    load_more_btn: string;
    load_btn: string;
  };
}

export const Packages = ({ paket, resor, lang, settings }: PackagesProps) => {
  const { content } = paket;

  return (
    <div>
      <div className="relative h-[50vh] lg:h-[50vh] lg:w-[100vw]">
        <div className="bg-black opacity-30 w-full absolute top-0 h-full z-10" />
        <Image
          alt={content.hero.alt}
          layout="fill"
          className="object-cover"
          objectPosition="center"
          src={content.hero.filename}
        />
        <p className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-[45px] text-[35px] md:text-6xl font-bold uppercase w-full">
          {content.hero_title}
        </p>
      </div>

      <div className="package-container flex flex-col w-[85%] m-auto">
        <div className="lg:grid grid-cols-2 gap-32 w-[100%] mt-6 lg:p-4 lg:mt-14 mb-6">
          <PackageInfo content={content} />
          <BookingForm lang={lang} settings={settings} />
        </div>

        <h2 className="text-center lg:mb-6 mt-10">
          {content.info_block_title}
        </h2>
        <InfoBlock paket={content.info_block} lang={lang} />

        {content.gallery.length > 0 && (
          <Gallery images={content.gallery} content={content} />
        )}

        <div className="flex flex-col gap-4 mt-16">
          {content.card && <Card content={content.card} />}
        </div>
        <div>
          <h2 className="text-center lg:text-start pb-4">
            {settings.travel_title}
          </h2>
          <div className="md:grid-cols-2 md:grid lg:grid-cols-4 gap-4">
            {resor
              .filter((item: any) =>
                item.content.category.includes("populara-resor")
              )
              .map((item: any, index: number) => (
                <TripsCard item={item} boolean={true} key={index} />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-16">
          <div>
            <h2 className="text-center">{content.contact_title}</h2>
          </div>
          <div>
            <div className="contact">{render(content.contact_content)}</div>
          </div>
        </div>
        <NewsLetterForm settings={settings} lang={lang} />
      </div>
    </div>
  );
};
