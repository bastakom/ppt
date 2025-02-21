import LinkBtn from "@/components/link-btn";
import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import { ImageProps } from "./utils/interface";

interface HeroSectionProps {
  blok: {
    paragraph1: string;
    paragraph2: string;
    title: string;
    buttonTitle: string;
    button: {
      cached_url: string;
    };
    heroImage: ImageProps;
    image: ImageProps;
  };
}
const HeroSection = ({ blok }: HeroSectionProps) => {
  const {
    paragraph1,
    paragraph2,
    title,
    buttonTitle,
    button,
    heroImage,
    image,
  } = blok;

  return (
    <div
      className={`w-full bg-cover bg-center relative ${
        heroImage ? "" : "h-[80vh]"
      }`}
      style={{
        background:
          heroImage && `url(${heroImage.filename}) no-repeat center/cover`,
      }}
    >
      {!heroImage && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full object-cover h-[80vh]"
        >
          <source src={image.filename} type="video/mp4" />
        </video>
      )}
      <div
        {...storyblokEditable(blok)}
        className="md:p-0 relative z-10 flex-col flex justify-center items-center text-white h-[100%]"
      >
        {heroImage && (
          <div className="h-[30vh] lg:h-[40vh] lg:w-full">
            <Image
              alt={image.name}
              layout="fill"
              fill
              objectFit="cover"
              objectPosition="left top"
              src={image.filename}
            />
          </div>
        )}

        {!heroImage ? (
          <h1 className="lg:mt-[0rem] text-[45px] md:text-6xl font-bold uppercase text-center z-20 lg:pb-10">
            {title}
          </h1>
        ) : (
          <h1 className="absolute left-50 text-[30px] lg:text-[45px] md:text-6xl font-bold uppercase text-center z-[100]">
            {title}
          </h1>
        )}

        <div className="p-[1rem] lg:p-[0rem] text-[16px] md:text-[24px] text-center lg:text-start">
          <p className="mb-2">{paragraph1}</p>
          <p>{paragraph2}</p>
        </div>
        {!heroImage && (
          <div className="mt-8">
            <LinkBtn
              link={`${button.cached_url.replace(/^\/(da|en)\//, "/")}`}
              title={buttonTitle}
              className="bg-[#f26627] uppercase text-xs pt-3.5 pb-3.5 pl-7 pr-7 hover:bg-[#052f63]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
