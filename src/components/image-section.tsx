"use client";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import LinkBtn from "./link-btn";
import { ImageProps } from "./utils/interface";

interface ImageSectionProps {
  blok: {
    heading: string;
    image: ImageProps;
    link: {
      cached_url: string;
    };
    link_title: string;
    content: React.ReactNode[];
    show_link: boolean;
    styling_left: boolean;
  };
}

export const ImageSection = ({ blok }: ImageSectionProps) => {
  const { heading, image, link, link_title, content, show_link, styling_left } =
    blok;

  return (
    <div
      className={` imgSectionContainer ${styling_left && "imgContainerLeft"}`}
      {...storyblokEditable(blok)}
    >
      <div className="imgSectionWrapper ">
        <h2 className="smallHeading">{heading}</h2>
        <div className="flex gap-[5px] items-center">
          <div className="paragraph">{render(content)}</div>
        </div>
        <div className="lg:mt-10">
          {show_link && (
            <LinkBtn
              className="button"
              link={`${link.cached_url.replace(/^\/(da|en)\//, "/")}`}
            >
              {link_title}
            </LinkBtn>
          )}
        </div>
      </div>

      <div className="imgContainer w-[40vw] h-[65vh] relative">
        <Image
          className="imgSection object-cover"
          alt={image.name}
          src={image.filename}
          fill
        />
      </div>
    </div>
  );
};
